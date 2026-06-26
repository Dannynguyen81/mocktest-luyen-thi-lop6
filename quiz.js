// quiz.js - SPA Logic for Mock Test Web Application
// Manages lobbies, tab switching, exam rendering, timer, self-grading, and leaderboard ranking.

// App State
let currentTab = 'english';
let currentExam = null;
let examTimer = null;
let timeRemaining = 0; // in seconds
let userAnswers = {}; // key: questionId, value: user typed answer or option selected
let selfGrades = {}; // key: questionId, value: float grade
let currentRankSubject = 'english';

// DOM Elements
const hoTenInput = document.getElementById('hoTen');
const namSinhInput = document.getElementById('namSinh');
const truongMMInput = document.getElementById('truongMM');

const tabBtns = document.querySelectorAll('.tab-btn');
const tabEnglish = document.getElementById('tab-english');
const tabTracnghiem = document.getElementById('tab-tracnghiem');
const tabToan = document.getElementById('tab-toan');

const lobbyScreen = document.getElementById('lobby-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const quizExamTitle = document.getElementById('quizExamTitle');
const quizClock = document.getElementById('quizClock');
const quizBody = document.getElementById('quizBody');

const resultStudentInfo = document.getElementById('resultStudentInfo');
const resultTotalScore = document.getElementById('resultTotalScore');
const resultFeedback = document.getElementById('resultFeedback');
const resultQuestionsList = document.getElementById('resultQuestionsList');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  loadStudentInfo();
  initLeaderboard();
  renderEnglishExams();
  renderTracnghiemExams();
  renderToanExams();

  // Register lobby actions
  document.getElementById('btnRandomExam').addEventListener('click', startRandomExam);
  document.getElementById('btnRandomTracnghiem').addEventListener('click', startRandomTracnghiemExam);
  document.getElementById('btnRandomToan').addEventListener('click', startRandomToanExam);
  document.getElementById('btnSubmitExam').addEventListener('click', submitExam);
  document.getElementById('btnExitExam').addEventListener('click', confirmExitExam);
  document.getElementById('btnFinishGrading').addEventListener('click', saveAndExitResult);

  // Auto-save student info when typing and re-render exam cards dynamically
  [hoTenInput, namSinhInput, truongMMInput].forEach(input => {
    input.addEventListener('input', () => {
      saveStudentInfo();
      renderEnglishExams();
      renderTracnghiemExams();
      renderToanExams();
    });
  });

  // Initialize sub-tabs switcher for leaderboard
  const rankSubtabBtns = document.querySelectorAll('.rank-subtab-btn');
  rankSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      rankSubtabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRankSubject = btn.getAttribute('data-subject');
      renderLeaderboard();
    });
  });
});

// Tab Switcher
function initTabs() {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabName) {
  currentTab = tabName;
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle content visibility
  tabEnglish.classList.add('hidden');
  tabTracnghiem.classList.add('hidden');
  tabToan.classList.add('hidden');
  document.getElementById('tab-rank').classList.add('hidden');

  if (tabName === 'english') {
    tabEnglish.classList.remove('hidden');
    renderEnglishExams();
  } else if (tabName === 'tracnghiem') {
    tabTracnghiem.classList.remove('hidden');
    renderTracnghiemExams();
  } else if (tabName === 'toan') {
    tabToan.classList.remove('hidden');
    renderToanExams();
  } else if (tabName === 'rank') {
    document.getElementById('tab-rank').classList.remove('hidden');
    
    // Sync sub-tabs active state with currentRankSubject
    const rankSubtabBtns = document.querySelectorAll('.rank-subtab-btn');
    rankSubtabBtns.forEach(btn => {
      if (btn.getAttribute('data-subject') === currentRankSubject) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    renderLeaderboard();
  }
}

// Local Storage for Student Info
function saveStudentInfo() {
  const info = {
    hoTen: hoTenInput.value,
    namSinh: namSinhInput.value,
    truongMM: truongMMInput.value
  };
  localStorage.setItem('student_info', JSON.stringify(info));
}

function loadStudentInfo() {
  const saved = localStorage.getItem('student_info');
  if (saved) {
    try {
      const info = JSON.parse(saved);
      hoTenInput.value = info.hoTen || '';
      namSinhInput.value = info.namSinh || '';
      truongMMInput.value = info.truongMM || '';
    } catch (e) {
      console.error(e);
    }
  }
}

// Leaderboard Database Logic
function initLeaderboard() {
  const saved = localStorage.getItem('leaderboard_data');
  let needsReset = false;
  if (saved) {
    try {
      const data = JSON.parse(saved);
      // Reset if data is not an object (dictionary) or doesn't have the expected subjects
      if (typeof data !== 'object' || Array.isArray(data) || !data.english || !data.tracnghiem || !data.toan) {
        needsReset = true;
      } else {
        // Reset if elements inside english have 'scores' (which was the old multi-column format)
        if (data.english.length > 0 && data.english[0].scores !== undefined) {
          needsReset = true;
        }
      }
    } catch (e) {
      needsReset = true;
    }
  } else {
    needsReset = true;
  }

  if (needsReset) {
    const emptyLeaderboard = {
      english: [],
      tracnghiem: [],
      toan: []
    };
    localStorage.setItem('leaderboard_data', JSON.stringify(emptyLeaderboard));
  }
}

function getCurrentStudentExamScore(subject, examId) {
  const name = hoTenInput.value.trim().toLowerCase();
  const school = truongMMInput.value.trim().toLowerCase();
  if (!name || !school) return null;

  const saved = localStorage.getItem('leaderboard_data');
  if (saved) {
    try {
      const leaderboardData = JSON.parse(saved);
      const subjectLeaderboard = leaderboardData[subject] || [];
      
      // Determine exam title
      let examTitle = '';
      if (subject === 'english') {
        const exam = ENGLISH_EXAMS.find(e => e.id === examId);
        if (exam) examTitle = exam.title;
      } else if (subject === 'tracnghiem') {
        const exam = TRACNGHIEM_EXAMS.find(e => e.id === examId);
        if (exam) examTitle = exam.title;
      } else if (subject === 'toan') {
        const exam = MATH_LOGIC_EXAMS.find(e => e.id === examId);
        if (exam) examTitle = exam.title;
      }
      
      if (!examTitle) return null;

      const matches = subjectLeaderboard.filter(item => 
        item.name.trim().toLowerCase() === name && 
        item.school.trim().toLowerCase() === school &&
        item.exam === examTitle
      );

      if (matches.length > 0) {
        return Math.max(...matches.map(m => m.score));
      }
    } catch(e) {
      console.error(e);
    }
  }
  return null;
}

function addLeaderboardEntry(entry) {
  let leaderboardData = {
    english: [],
    tracnghiem: [],
    toan: []
  };
  const saved = localStorage.getItem('leaderboard_data');
  if (saved) {
    try {
      leaderboardData = JSON.parse(saved);
    } catch(e) {
      console.error(e);
    }
  }
  
  const subject = entry.subject || 'english';
  let subjectLeaderboard = leaderboardData[subject] || [];
  
  const attempt = {
    name: entry.name.trim(),
    school: entry.school.trim(),
    exam: entry.exam,
    score: entry.score
  };
  
  subjectLeaderboard.push(attempt);
  
  // Sort descending by score
  subjectLeaderboard.sort((a, b) => b.score - a.score);
  
  leaderboardData[subject] = subjectLeaderboard;
  localStorage.setItem('leaderboard_data', JSON.stringify(leaderboardData));
}

function renderLeaderboard() {
  const body = document.getElementById('leaderboardBody');
  if (!body) return;
  body.innerHTML = '';
  
  let leaderboardData = {
    english: [],
    tracnghiem: [],
    toan: []
  };
  const saved = localStorage.getItem('leaderboard_data');
  if (saved) {
    try {
      leaderboardData = JSON.parse(saved);
    } catch(e) {
      console.error(e);
    }
  }
  
  const subjectLeaderboard = leaderboardData[currentRankSubject] || [];
  
  if (subjectLeaderboard.length === 0) {
    body.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-muted); padding: 24px 8px;">Chưa có bảng xếp hạng cho môn này. Hãy làm đề thi để được xếp hạng!</td></tr>`;
    return;
  }
  
  subjectLeaderboard.forEach((item, index) => {
    const rank = index + 1;
    let rankBadgeClass = 'rank-badge rank-other';
    if (rank === 1) rankBadgeClass = 'rank-badge rank-1';
    else if (rank === 2) rankBadgeClass = 'rank-badge rank-2';
    else if (rank === 3) rankBadgeClass = 'rank-badge rank-3';
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="text-align: center; padding: 12px 6px;">
        <span class="${rankBadgeClass}">${rank}</span>
      </td>
      <td style="padding: 12px 6px; font-weight: 600; color: var(--primary-color);">${escapeHtml(item.name)}</td>
      <td style="padding: 12px 6px; color: var(--text-muted);">${escapeHtml(item.school)}</td>
      <td style="padding: 12px 6px; color: var(--text-main);">${escapeHtml(item.exam)}</td>
      <td style="padding: 12px 6px; text-align: right; font-weight: 800; color: var(--accent-color);">${item.score.toFixed(1)}đ</td>
    `;
    body.appendChild(row);
  });
}

// Render English exams list in Lobby
function renderEnglishExams() {
  const container = document.getElementById('englishExamList');
  container.innerHTML = '';

  ENGLISH_EXAMS.forEach(exam => {
    const card = document.createElement('div');
    card.className = 'exam-card';

    // Get student-specific score if completed
    const savedScore = getCurrentStudentExamScore('english', exam.id);
    let statusHtml = '';
    let btnText = 'Làm bài';
    let btnClass = 'exam-action-btn';

    if (savedScore !== null) {
      statusHtml = `<span class="status-badge completed">Đã đạt: ${savedScore.toFixed(1)}/30.0đ</span>`;
      btnText = 'Làm lại đề';
      btnClass = 'exam-action-btn review';
    } else {
      statusHtml = `<span class="status-badge unstarted">Chưa làm</span>`;
    }

    card.innerHTML = `
      <div>
        <div class="exam-card-title">${exam.title}</div>
        <div class="exam-card-meta">
          <span><i class="fa-regular fa-clock"></i> ${exam.duration} phút</span>
          <span><i class="fa-solid fa-star"></i> 30.0 điểm</span>
          ${statusHtml}
        </div>
      </div>
      <div>
        <button class="${btnClass}" onclick="tryStartExam(${exam.id})">${btnText}</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Trắc nghiệm exams list in Lobby
function renderTracnghiemExams() {
  const container = document.getElementById('tracnghiemExamList');
  if (!container) return;
  container.innerHTML = '';

  TRACNGHIEM_EXAMS.forEach(exam => {
    const card = document.createElement('div');
    card.className = 'exam-card';

    // Get student-specific score if completed
    const savedScore = getCurrentStudentExamScore('tracnghiem', exam.id);
    let statusHtml = '';
    let btnText = 'Làm bài';
    let btnClass = 'exam-action-btn';

    if (savedScore !== null) {
      statusHtml = `<span class="status-badge completed">Đã đạt: ${savedScore.toFixed(1)}/40.0đ</span>`;
      btnText = 'Làm lại đề';
      btnClass = 'exam-action-btn review';
    } else {
      statusHtml = `<span class="status-badge unstarted">Chưa làm</span>`;
    }

    card.innerHTML = `
      <div>
        <div class="exam-card-title">${exam.title}</div>
        <div class="exam-card-meta">
          <span><i class="fa-regular fa-clock"></i> ${exam.duration} phút</span>
          <span><i class="fa-solid fa-star"></i> 40.0 điểm</span>
          ${statusHtml}
        </div>
      </div>
      <div>
        <button class="${btnClass}" onclick="tryStartExam(${exam.id})">${btnText}</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Toán - Tư duy exams list in Lobby
function renderToanExams() {
  const container = document.getElementById('toanExamList');
  if (!container) return;
  container.innerHTML = '';

  MATH_LOGIC_EXAMS.forEach(exam => {
    const card = document.createElement('div');
    card.className = 'exam-card';

    // Get student-specific score if completed
    const savedScore = getCurrentStudentExamScore('toan', exam.id);
    let statusHtml = '';
    let btnText = 'Làm bài';
    let btnClass = 'exam-action-btn';

    if (savedScore !== null) {
      statusHtml = `<span class="status-badge completed">Đã đạt: ${savedScore.toFixed(1)}/15.0đ</span>`;
      btnText = 'Làm lại đề';
      btnClass = 'exam-action-btn review';
    } else {
      statusHtml = `<span class="status-badge unstarted">Chưa làm</span>`;
    }

    card.innerHTML = `
      <div>
        <div class="exam-card-title">${exam.title}</div>
        <div class="exam-card-meta">
          <span><i class="fa-regular fa-clock"></i> ${exam.duration} phút</span>
          <span><i class="fa-solid fa-star"></i> 15.0 điểm</span>
          ${statusHtml}
        </div>
      </div>
      <div>
        <button class="${btnClass}" onclick="tryStartExam(${exam.id})">${btnText}</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Validation before starting exam
function validateStudentInfo() {
  const hoTen = hoTenInput.value.trim();
  const namSinh = namSinhInput.value.trim();
  const truongMM = truongMMInput.value.trim();

  if (!hoTen || !namSinh || !truongMM) {
    alert('Vui lòng nhập đầy đủ thông tin học sinh ở thẻ trên trước khi tham gia thi thử.');
    // Scroll to info card
    document.getElementById('info-card').scrollIntoView({ behavior: 'smooth' });
    return false;
  }
  return true;
}

// Trigger start
window.tryStartExam = function(examId) {
  if (!validateStudentInfo()) return;
  startExam(currentTab, examId);
};

function startRandomExam() {
  if (!validateStudentInfo()) return;
  // Pick random exam from ENGLISH_EXAMS
  const randomIndex = Math.floor(Math.random() * ENGLISH_EXAMS.length);
  const exam = ENGLISH_EXAMS[randomIndex];
  startExam('english', exam.id);
}

function startRandomTracnghiemExam() {
  if (!validateStudentInfo()) return;
  // Pick random exam from TRACNGHIEM_EXAMS
  const randomIndex = Math.floor(Math.random() * TRACNGHIEM_EXAMS.length);
  const exam = TRACNGHIEM_EXAMS[randomIndex];
  startExam('tracnghiem', exam.id);
}

function startRandomToanExam() {
  if (!validateStudentInfo()) return;
  // Pick random exam from MATH_LOGIC_EXAMS
  const randomIndex = Math.floor(Math.random() * MATH_LOGIC_EXAMS.length);
  const exam = MATH_LOGIC_EXAMS[randomIndex];
  startExam('toan', exam.id);
}

// Start exam
function startExam(subject, examId) {
  let exam;
  if (subject === 'english') {
    exam = ENGLISH_EXAMS.find(e => e.id === examId);
  } else if (subject === 'tracnghiem') {
    exam = TRACNGHIEM_EXAMS.find(e => e.id === examId);
  } else if (subject === 'toan') {
    exam = MATH_LOGIC_EXAMS.find(e => e.id === examId);
  }
  if (!exam) return;

  currentExam = exam;
  userAnswers = {};
  selfGrades = {};

  // Setup screen transition
  lobbyScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden');

  // Setup headers
  quizExamTitle.textContent = exam.title.toUpperCase();
  timeRemaining = exam.duration * 60; // Convert to seconds
  updateTimerUI();

  // Start timer interval
  if (examTimer) clearInterval(examTimer);
  examTimer = setInterval(() => {
    timeRemaining--;
    updateTimerUI();
    if (timeRemaining <= 0) {
      clearInterval(examTimer);
      alert('Đã hết thời gian làm bài! Hệ thống tự động chuyển sang trang chấm điểm.');
      submitExam();
    }
  }, 1000);

  // Render questions
  renderQuestions(exam);
  window.scrollTo(0, 0);
}

function updateTimerUI() {
  const min = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;
  const timeStr = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  quizClock.textContent = timeStr;

  // Add warning style if time is low (<= 5 minutes)
  if (timeRemaining <= 300) {
    quizClock.classList.add('warning');
  } else {
    quizClock.classList.remove('warning');
  }
}

// Dynamic questions renderer
function renderQuestions(exam) {
  quizBody.innerHTML = '';

  exam.parts.forEach((part, partIdx) => {
    // Part Header
    const partTitle = document.createElement('div');
    partTitle.className = 'sub';
    partTitle.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i> ${part.title}`;
    quizBody.appendChild(partTitle);

    if (part.description) {
      const partDesc = document.createElement('div');
      partDesc.className = 'note';
      partDesc.innerHTML = part.description;
      quizBody.appendChild(partDesc);
    }

    if (part.passage) {
      const passageBox = document.createElement('div');
      passageBox.className = 'passage';
      passageBox.innerHTML = part.passage;
      quizBody.appendChild(passageBox);
    }

    // Questions list
    part.questions.forEach((q, qIdx) => {
      const qDiv = document.createElement('div');
      qDiv.className = 'q-container';
      qDiv.style.marginBottom = '24px';

      const qTitle = document.createElement('div');
      qTitle.className = 'q';
      qTitle.innerHTML = `${q.text} <span class="muted">(${q.maxPoints}đ)</span>`;
      qDiv.appendChild(qTitle);

      // Render image if available
      if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.className = 'q-img';
        qDiv.appendChild(img);
      }

      // Render based on type
      if (q.type === 'tf') {
        const optsDiv = document.createElement('div');
        optsDiv.className = 'opts';
        
        ['True', 'False'].forEach(val => {
          const optLabel = document.createElement('div');
          optLabel.className = 'opt';
          optLabel.id = `opt-container-${q.id}-${val}`;
          optLabel.innerHTML = `
            <input type="radio" name="radio-${q.id}" value="${val}" id="input-${q.id}-${val}">
            <span>${val}</span>
          `;
          
          // Select handler
          optLabel.addEventListener('click', () => {
            document.getElementById(`input-${q.id}-${val}`).checked = true;
            userAnswers[q.id] = val;
            // Update active state class
            optsDiv.querySelectorAll('.opt').forEach(el => el.classList.remove('selected'));
            optLabel.classList.add('selected');
          });

          optsDiv.appendChild(optLabel);
        });

        qDiv.appendChild(optsDiv);
      } else if (q.type === 'mc') {
        const optsDiv = document.createElement('div');
        optsDiv.className = 'opts';

        q.options.forEach(opt => {
          const letter = opt.charAt(0); // A, B, or C
          const optLabel = document.createElement('div');
          optLabel.className = 'opt';
          optLabel.id = `opt-container-${q.id}-${letter}`;
          optLabel.innerHTML = `
            <input type="radio" name="radio-${q.id}" value="${letter}" id="input-${q.id}-${letter}">
            <span>${opt}</span>
          `;

          // Select handler
          optLabel.addEventListener('click', () => {
            document.getElementById(`input-${q.id}-${letter}`).checked = true;
            userAnswers[q.id] = letter;
            optsDiv.querySelectorAll('.opt').forEach(el => el.classList.remove('selected'));
            optLabel.classList.add('selected');
          });

          optsDiv.appendChild(optLabel);
        });

        qDiv.appendChild(optsDiv);
      } else {
        // Text input / Essay
        const inputDiv = document.createElement('div');
        inputDiv.style.marginTop = '8px';

        if (q.maxPoints > 3.0) {
          // Large essay sentences
          const textarea = document.createElement('textarea');
          textarea.className = 'f';
          textarea.rows = 2;
          textarea.placeholder = 'Gõ câu trả lời của em tại đây...';
          textarea.addEventListener('input', (e) => {
            userAnswers[q.id] = e.target.value;
          });
          inputDiv.appendChild(textarea);
        } else {
          // Single word/short sentence
          const input = document.createElement('input');
          input.type = 'text';
          input.className = 'f';
          input.placeholder = 'Điền từ hoặc câu trả lời ngắn...';
          input.addEventListener('input', (e) => {
            userAnswers[q.id] = e.target.value;
          });
          inputDiv.appendChild(input);
        }
        qDiv.appendChild(inputDiv);
      }

      quizBody.appendChild(qDiv);
    });
  });
}

// Exit quiz confirmation
function confirmExitExam() {
  if (confirm('Bạn có chắc chắn muốn thoát? Bài làm hiện tại của đề này sẽ không được lưu.')) {
    if (examTimer) clearInterval(examTimer);
    quizScreen.classList.add('hidden');
    lobbyScreen.classList.remove('hidden');
    renderEnglishExams();
    renderTracnghiemExams();
    renderToanExams();
  }
}

// Submit Exam & Pre-grade
function submitExam() {
  if (examTimer) clearInterval(examTimer);

  // Transition to grading screen
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  // Fill personal info card in results
  resultStudentInfo.innerHTML = `
    <strong>Học sinh:</strong> ${hoTenInput.value} (${namSinhInput.value}) | 
    <strong>Trường tiểu học:</strong> ${truongMMInput.value}
  `;

  // Pre-grade and render comparison list
  resultQuestionsList.innerHTML = '';
  let cumulativeScore = 0.0;

  currentExam.parts.forEach(part => {
    part.questions.forEach(q => {
      const userVal = userAnswers[q.id] || '';
      
      // Auto-grader logic
      let autoScore = 0.0;
      let isCorrect = false;

      if (q.type === 'tf' || q.type === 'mc') {
        isCorrect = (userVal.trim().toLowerCase() === q.modelAnswer.trim().toLowerCase());
        autoScore = isCorrect ? q.maxPoints : 0.0;
      } else {
        // Text-based Cloze or Sentence matching
        isCorrect = isCorrectAnswerMatch(userVal, q.modelAnswer);
        autoScore = isCorrect ? q.maxPoints : 0.0;
      }

      selfGrades[q.id] = autoScore;
      cumulativeScore += autoScore;

      // Render Comparison Card
      const card = document.createElement('div');
      card.className = 'card';
      card.style.borderColor = isCorrect ? '#a7f3d0' : '#e2e8f0';

      const compareTitle = document.createElement('div');
      compareTitle.className = 'compare-title';
      compareTitle.innerHTML = `${q.text} <span class="muted">(${q.maxPoints} điểm)</span>`;
      card.appendChild(compareTitle);

      // Render image on results page if available
      if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.className = 'q-img';
        card.appendChild(img);
      }

      const grid = document.createElement('div');
      grid.className = 'compare-grid';

      // Column 1: My answer
      const colUser = document.createElement('div');
      colUser.className = 'compare-box my-answer';
      colUser.innerHTML = `
        <div class="compare-header"><i class="fa-regular fa-pen-to-square"></i> Bài làm của em</div>
        <div style="font-weight:700; color: ${userVal ? 'var(--primary-color)' : '#94a3b8'}">
          ${userVal ? escapeHtml(userVal) : '(Không trả lời)'}
        </div>
      `;
      grid.appendChild(colUser);

      // Column 2: Model Answer
      const colModel = document.createElement('div');
      colModel.className = 'compare-box model-answer';
      colModel.innerHTML = `
        <div class="compare-header"><i class="fa-regular fa-square-check"></i> Đáp án gợi ý</div>
        <div style="font-weight:700;">${escapeHtml(q.modelAnswer)}</div>
      `;
      grid.appendChild(colModel);

      card.appendChild(grid);

      // Grading Panel with Slider & Buttons
      const gradingPanel = document.createElement('div');
      gradingPanel.className = 'grading-panel';
      
      const badgeClass = isCorrect ? 'status-badge completed' : 'status-badge unstarted';
      const badgeText = isCorrect ? 'Khớp đáp án' : 'Học sinh chấm';
      
      gradingPanel.innerHTML = `
        <div style="display:flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <div class="compare-header" style="margin: 0;"><i class="fa-solid fa-award"></i> Biểu điểm &amp; Tự chấm</div>
          <span class="${badgeClass}" style="font-size: 10px;">${badgeText}</span>
        </div>
        <div style="font-size: 13px; color: #475569; margin-bottom: 12px; background: #fff; padding: 6px 10px; border-radius: 6px; border-left: 3px solid var(--primary-light);">
          <strong>Rubric:</strong> ${q.rubric}
        </div>
        <div class="grading-slider-container">
          <input type="range" class="grading-slider" id="slider-${q.id}" min="0" max="${q.maxPoints}" step="0.5" value="${autoScore}">
          <div class="grade-val" id="val-${q.id}">${autoScore.toFixed(1)} / ${q.maxPoints.toFixed(1)}đ</div>
        </div>
      `;

      // Quick Grading Buttons
      const buttonRow = document.createElement('div');
      buttonRow.style.display = 'flex';
      buttonRow.style.gap = '8px';
      buttonRow.style.marginTop = '10px';
      buttonRow.style.flexWrap = 'wrap';

      for (let pts = 0; pts <= q.maxPoints; pts += 0.5) {
        const btn = document.createElement('button');
        btn.className = `quick-grade-btn ${pts === autoScore ? 'active' : ''}`;
        btn.textContent = `${pts.toFixed(1)}đ`;
        
        btn.addEventListener('click', () => {
          // Update state, slider value, and text
          selfGrades[q.id] = pts;
          document.getElementById(`slider-${q.id}`).value = pts;
          document.getElementById(`val-${q.id}`).textContent = `${pts.toFixed(1)} / ${q.maxPoints.toFixed(1)}đ`;
          
          // Toggle active class inside button group
          buttonRow.querySelectorAll('.quick-grade-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Re-calculate total
          recalculateTotalScore();
        });
        buttonRow.appendChild(btn);
      }
      gradingPanel.appendChild(buttonRow);

      // Slider event listener
      const slider = gradingPanel.querySelector('.grading-slider');
      slider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        selfGrades[q.id] = val;
        document.getElementById(`val-${q.id}`).textContent = `${val.toFixed(1)} / ${q.maxPoints.toFixed(1)}đ`;
        
        // Deactivate all quick buttons
        buttonRow.querySelectorAll('.quick-grade-btn').forEach(btn => {
          if (parseFloat(btn.textContent) === val) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });

        recalculateTotalScore();
      });

      card.appendChild(gradingPanel);

      // Explanation callout box
      if (q.explanation) {
        const explanationBox = document.createElement('div');
        explanationBox.className = 'explanation-box';
        explanationBox.innerHTML = `<strong><i class="fa-regular fa-lightbulb"></i> Giải thích chi tiết:</strong> ${q.explanation}`;
        card.appendChild(explanationBox);
      }

      resultQuestionsList.appendChild(card);
    });
  });

  recalculateTotalScore();
  window.scrollTo(0, 0);
}

// Recalculates sum and renders teacher feedback
function recalculateTotalScore() {
  let total = 0.0;
  for (const qId in selfGrades) {
    total += selfGrades[qId];
  }
  resultTotalScore.textContent = total.toFixed(1);

  // Dynamic denominator for score label
  const maxScore = currentExam ? currentExam.totalPoints : 30.0;
  const scoreLbl = document.querySelector('.score-lbl');
  if (scoreLbl) {
    scoreLbl.innerHTML = `Tổng điểm tự chấm / ${maxScore.toFixed(1)}đ`;
  }

  // Generate automated pedagogic advice
  const percentage = (total / maxScore) * 100;
  let feedback = '';

  if (currentExam && currentExam.subject === 'tracnghiem') {
    if (percentage >= 90) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Xuất sắc! Em có năng lực tư duy, kiến thức khoa học, lịch sử, địa lý và tiếng Việt cực kỳ nhạy bén. Hãy tiếp tục phát huy để giành điểm số tuyệt đối trong kỳ khảo sát chính thức vào Nguyễn An Ninh!';
    } else if (percentage >= 70) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Rất tốt! Em đã làm rất tốt hầu hết các câu hỏi. Hãy xem kỹ các câu bị sai ở phần Giải thích chi tiết bên dưới để bổ sung lỗ hổng kiến thức, đặc biệt là các câu hỏi tư duy logic và tiếng Việt.';
    } else if (percentage >= 50) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Khá tốt! Em có nền tảng kiến thức cơ bản tốt. Tuy nhiên cần chú ý rèn luyện thêm kỹ năng đọc hiểu câu hỏi tiếng Anh trong phần trắc nghiệm khoa học/toán học để không bị bẫy đề thi nhé.';
    } else {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Cần cố gắng nhiều hơn! Điểm số trắc nghiệm tổng hợp của em chưa được như kỳ vọng. Em nên đọc thật kỹ phần Giải thích chi tiết, ôn tập lại SGK Lớp 5 và làm lại đề này để ghi nhớ sâu sắc kiến thức.';
    }
  } else if (currentExam && currentExam.subject === 'toan') {
    if (percentage >= 90) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Tuyệt vời! Năng lực toán học và tư duy logic của em đạt mức xuất sắc. Em giải quyết các bài toán vận tốc, tỷ số và hình học rất nhanh nhạy. Hãy tiếp tục phát huy để đạt điểm tối đa trong kỳ khảo sát chính thức vào Nguyễn An Ninh!';
    } else if (percentage >= 70) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Rất tốt! Em đã nắm vững các phương pháp giải bài toán Tổng - Hiệu, Tỷ số phần trăm và Hình học cơ bản. Hãy chú ý đọc kỹ yêu cầu đề bài và kiểm tra kỹ lại các bước tính toán của câu tự luận nhé.';
    } else if (percentage >= 50) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Khá tốt! Em có tư duy logic khá ổn. Tuy nhiên, em cần luyện tập thêm các dạng toán chuyển động (vận tốc, quãng đường, thời gian) và cách trình bày tự luận mạch lạc hơn.';
    } else {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Cần cố gắng nhiều hơn! Điểm số Toán và Tư duy logic của em chưa đạt yêu cầu. Em nên ôn tập kỹ phương pháp giải toán có lời văn lớp 5, tham khảo kỹ lời giải chi tiết bên dưới và thử sức lại nhé.';
    }
  } else {
    // English feedback
    if (total >= 27.0) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Xuất sắc! Năng lực Tiếng Anh của em rất vững vàng. Em có kỹ năng đọc hiểu và vốn từ vựng phong phú. Hãy tiếp tục phát huy để đạt điểm tối đa trong kỳ thi chính thức vào Nguyễn An Ninh!';
    } else if (total >= 21.0) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Rất tốt! Em đã nắm vững hầu hết các dạng bài đọc và viết. Hãy lưu ý các lỗi ngữ pháp nhỏ trong phần sắp xếp câu và viết lại câu từ từ gợi ý để tối ưu hóa điểm số nhé.';
    } else if (total >= 15.0) {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Khá tốt! Năng lực của em ở mức khá. Em cần củng cố thêm ngữ pháp của phần Viết (chia thì động từ, giới từ) và tăng cường vốn từ vựng học thuật để hiểu sâu hơn các bài đọc phức tạp.';
    } else {
      feedback = '<strong>Lời khuyên sư phạm:</strong> Cần cố gắng nhiều hơn! Em nên ôn tập lại các chủ đề từ vựng cơ bản lớp 5, cấu trúc câu điều kiện, viết lại câu đơn giản và làm lại đề thi này một lần nữa để cải thiện điểm số.';
    }
  }
  resultFeedback.innerHTML = feedback;
}

// Save Score & Return
function saveAndExitResult() {
  const finalScoreStr = parseFloat(resultTotalScore.textContent).toFixed(1);
  localStorage.setItem(`exam_score_${currentExam.subject}_${currentExam.id}`, finalScoreStr);

  const subject = currentExam.subject || 'english';

  // Add new leaderboard entry
  const studentEntry = {
    name: hoTenInput.value.trim(),
    school: truongMMInput.value.trim(),
    exam: currentExam.title,
    score: parseFloat(finalScoreStr),
    subject: subject
  };
  addLeaderboardEntry(studentEntry);

  const maxPoints = currentExam ? currentExam.totalPoints : 30.0;
  alert(`Đã lưu kết quả thi của em: ${finalScoreStr}/${maxPoints.toFixed(1)}đ và cập nhật Bảng xếp hạng. Hệ thống quay lại sảnh chính.`);
  
  resultScreen.classList.add('hidden');
  lobbyScreen.classList.remove('hidden');

  // Switch to the correct rank sub-tab and render it
  currentRankSubject = subject;
  document.querySelectorAll('.rank-subtab-btn').forEach(btn => {
    if (btn.getAttribute('data-subject') === currentRankSubject) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Go to Leaderboard tab to show results
  switchTab('rank');
}

// Auto-grader helper functions
function isCorrectAnswerMatch(userVal, modelVal) {
  if (!userVal) return false;
  
  // Normalize strings: remove extra whitespace, lowercase, remove basic punctuations
  const cleanStr = (str) => {
    return str.trim()
      .toLowerCase()
      .replace(/[\.\,\?\!\-\"\']/g, '')
      .replace(/\s+/g, ' ');
  };

  const userClean = cleanStr(userVal);
  // Split multiple choices separated by slash
  const options = modelVal.split('/').map(opt => cleanStr(opt));

  return options.some(opt => {
    // Exact match or matches option
    if (userClean === opt) return true;
    
    // For longer answers: if correct answer has optional parts in parenthesis (like "(because)")
    let optRegex = opt.replace(/\(/g, '(?:').replace(/\)/g, ')?');
    try {
      const reg = new RegExp('^' + optRegex + '$');
      if (reg.test(userClean)) return true;
    } catch(e) {}

    return false;
  });
}

// Basic HTML escaping helper
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
