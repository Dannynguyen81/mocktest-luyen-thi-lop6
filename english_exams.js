// English Exams Database for Grade 5 Mock Test
// Contains 10 exams: 3 official (2023, 2024, 2025) and 7 newly composed exams.
// Total score: 30.0 points. No Listening part.

const ENGLISH_EXAMS = [
  {
    id: 1,
    title: "Đề thi số 1 (Chính thức năm 2023)",
    duration: 30, // 20 minutes suggested
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Acting in a play is very exciting. Actors have to practice for many months before the big (1) __________. For example, in the play Othello, the main actor has a very important (2) __________. Professional acting can be very (3) __________ at times, but it is also rewarding. The best part is performing live on (4) __________ where you can see the audience react to your performance.<br><br>
        Question 1: (show / dinner / class)<br>
        Question 2: (role / book / house)<br>
        Question 3: (challenging / easy / boring)<br>
        Question 4: (stage / water / street)`,
        questions: [
          {
            id: "Q1_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (show / dinner / class)",
            modelAnswer: "show",
            rubric: "Điền đúng từ 'show' (2.0 điểm)."
          },
          {
            id: "Q1_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (role / book / house)",
            modelAnswer: "role",
            rubric: "Điền đúng từ 'role' (2.0 điểm)."
          },
          {
            id: "Q1_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (challenging / easy / boring)",
            modelAnswer: "challenging",
            rubric: "Điền đúng từ 'challenging' (2.0 điểm)."
          },
          {
            id: "Q1_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (stage / water / street)",
            modelAnswer: "stage",
            rubric: "Điền đúng từ 'stage' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the following passage carefully. Do the tasks below the passage. (8.0 pts)",
        passage: `<strong>Recycling around the World</strong><br>
        New statistics give a view of recycling around the world. Here are three of the countries in the report.<br><br>
        <strong>Switzerland:</strong> The Swiss score well at recycling. With so many different types of recycling bins, local people only have to throw away a few household items. For example, they recycle 80% of their plastic bottles. That's much higher than other countries in Europe with plastic recycling levels of only between 24 - 40%.<br><br>
        <strong>The United States of America:</strong> Overall the USA doesn’t recycle as much rubbish as Switzerland but it has introduced a lot of new projects in recent years and so its record is really improving quickly. This year it recycled 48% of its paper, 40% of its plastic bottles and 55% of its cans.<br><br>
        <strong>Senegal:</strong> Senegal only recycles a little of its waste industrially. However, people don’t throw away any items that they can use for something else. For example, you can buy shoes made from old plastic bags, and drinking cups from tin cans. Here, everything has another purpose.`,
        questions: [
          {
            id: "Q1_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: In Switzerland people recycle a lot of household items.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q1_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: The United States recycled a higher percentage of its paper than that of its cans.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (USA recycled 48% of paper, 55% of cans. So paper is lower, not higher)."
          },
          {
            id: "Q1_7",
            type: "mc",
            options: [
              "A. industrial waste in Senegal, Africa",
              "B. Swiss people and recycling in Europe",
              "C. a quick view of how nations recycle"
            ],
            maxPoints: 2.0,
            text: "Question 3: Choose the best answer A, B, or C to fill in the blank. The passage is mainly about ______.",
            modelAnswer: "C",
            rubric: "Chọn 'C' (2.0 điểm)."
          },
          {
            id: "Q1_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down two words that you find in the passage which mean 'things people use in their home'.",
            modelAnswer: "household items",
            rubric: "Tìm đúng cụm từ 'household items' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q1_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: he / study / harder / to / pass the exam / should / .//",
            modelAnswer: "He should study harder to pass the exam.",
            rubric: "Sắp xếp đúng: 'He should study harder to pass the exam.' (2.0 điểm)."
          },
          {
            id: "Q1_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: a lot of / there are / different types / of recycling bins / in Switzerland / .//",
            modelAnswer: "There are a lot of different types of recycling bins in Switzerland.",
            rubric: "Sắp xếp đúng: 'There are a lot of different types of recycling bins in Switzerland.' (2.0 điểm)."
          },
          {
            id: "Q1_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: make good use / in Senegal, / people / of old products / to protect nature / .//",
            modelAnswer: "In Senegal, people make good use of old products to protect nature.",
            rubric: "Sắp xếp đúng: 'In Senegal, people make good use of old products to protect nature.' (2.0 điểm)."
          },
          {
            id: "Q1_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: is improving / the record / of paper recycling / in the USA / quickly / .//",
            modelAnswer: "The record of paper recycling in the USA is improving quickly.",
            rubric: "Sắp xếp đúng: 'The record of paper recycling in the USA is improving quickly.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q1_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: I / like / apologize / not return / dictionary / you //",
            modelAnswer: "I would like to apologize for not returning the dictionary to you. (hoặc: I would like to apologise for not returning your dictionary to you.)",
            rubric: "Viết đúng cấu trúc: 'I would like to apologize/apologise for not returning the/your dictionary to you.' (2.0 điểm). Sai chia động từ hoặc thiếu giới từ trừ 0.5 điểm mỗi lỗi."
          },
          {
            id: "Q1_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: concert hall / completed / May, / and / been / open / then //",
            modelAnswer: "The concert hall was completed in May, and has been open since then.",
            rubric: "Viết đúng cấu trúc: 'The concert hall was completed in May, and has been open since then.' (2.0 điểm)."
          },
          {
            id: "Q1_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: It / be / important / us / recycle / plastic bottles / protect / Earth //",
            modelAnswer: "It is important for us to recycle plastic bottles to protect the Earth. (hoặc: It is important for us to recycle plastic bottles to protect Earth.)",
            rubric: "Viết đúng câu: 'It is important for us to recycle plastic bottles to protect the Earth.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Đề thi số 2 (Chính thức năm 2024)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Read the following passage carefully. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Scientists are studying ways of making clean electricity that is not made from (0) <strong>natural</strong> resources. This is important if we want to (1) __________ global warming and pollution. How is electricity made in your country?<br>
        <strong>Wind Energy:</strong> Wind turbines use the energy from the wind to make electricity. We can build wind turbines in isolated places and also in the (2) __________. They can be useful in colder countries (3) __________ there is not enough sunshine to use solar energy to make electricity. Germany, for example, makes 6% of its electricity in wind farms. All (4) __________ the world, there are more and more wind farms.<br><br>
        Question 0: (natural / unlimited / enormous) [Đã làm mẫu]<br>
        Question 1: (reduce / reuse / recycle)<br>
        Question 2: (buildings / tunnels / oceans)<br>
        Question 3: (who / when / where)<br>
        Question 4: (over / on / in)`,
        questions: [
          {
            id: "Q2_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (reduce / reuse / recycle)",
            modelAnswer: "reduce",
            rubric: "Điền đúng từ 'reduce' (2.0 điểm)."
          },
          {
            id: "Q2_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (buildings / tunnels / oceans)",
            modelAnswer: "oceans",
            rubric: "Điền đúng từ 'oceans' (2.0 điểm)."
          },
          {
            id: "Q2_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (who / when / where)",
            modelAnswer: "where",
            rubric: "Điền đúng từ 'where' (2.0 điểm)."
          },
          {
            id: "Q2_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (over / on / in)",
            modelAnswer: "over",
            rubric: "Điền đúng từ 'over' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the following passage carefully. Do the tasks below the passage. (8.0 pts)",
        passage: `<strong>The world’s largest fish</strong><br>
        Do you know the largest fish in the world is a gentle shark with small teeth? It cannot use its teeth to eat. This fish is the whale shark. An adult whale shark averages 25 feet in length. Some reach 40 feet or more. That’s as big as a full-sized school bus and twice as big as a great white shark! Like other fish, whale sharks absorb dissolved oxygen from the water. Another cool thing about the whale shark is the spot on its body. Each whale shark has a unique spot pattern. Scientists studying whale sharks have used this to help to tell one shark from another.`,
        questions: [
          {
            id: "Q2_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: There is a unique spot pattern on the body of each whale shark.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q2_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: A full-sized school bus is used to compare with the size of a normal adult whale shark.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Xe buýt được dùng để so sánh với những con lớn đạt 40 feet trở lên, chứ không phải con trưởng thành trung bình 25 feet)."
          },
          {
            id: "Q2_7",
            type: "mc",
            options: [
              "A. get small fish to eat",
              "B. take in dissolved oxygen",
              "C. are as big as blue whales"
            ],
            maxPoints: 2.0,
            text: "Question 3: Whale sharks ____________________ from the water.",
            modelAnswer: "B",
            rubric: "Chọn 'B' hoặc điền 'take in dissolved oxygen' (2.0 điểm)."
          },
          {
            id: "Q2_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'kind, calm and mild'.",
            modelAnswer: "gentle",
            rubric: "Tìm đúng từ 'gentle' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q2_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: Ronaldo / a lot of people / football player / think that / is the best /.//",
            modelAnswer: "A lot of people think that Ronaldo is the best football player.",
            rubric: "Sắp xếp đúng: 'A lot of people think that Ronaldo is the best football player.' (2.0 điểm). Sai lỗi chính tả nhỏ hoặc thiếu dấu câu trừ 0.5 điểm."
          },
          {
            id: "Q2_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: electricity / forget to / leaving home / don’t / to save / all the lights before / turn off /.//",
            modelAnswer: "Don’t forget to turn off all the lights before leaving home to save electricity.",
            rubric: "Sắp xếp đúng: 'Don’t forget to turn off all the lights before leaving home to save electricity.' (2.0 điểm). Sai cấu trúc không được điểm."
          },
          {
            id: "Q2_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: primary school students/ our city will / next year , / digital citizenship to / start teaching /.//",
            modelAnswer: "Next year, our city will start teaching digital citizenship to primary school students.",
            rubric: "Sắp xếp đúng: 'Next year, our city will start teaching digital citizenship to primary school students.' (2.0 điểm)."
          },
          {
            id: "Q2_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: with you in / and / always / the mountain / take a map / a sleeping bag /.//",
            modelAnswer: "Always take a map and a sleeping bag with you in the mountain.",
            rubric: "Sắp xếp đúng: 'Always take a map and a sleeping bag with you in the mountain.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q2_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: Mr. Lee / always have / dinner / 7 o’clock / and watch TV / the evening /.//",
            modelAnswer: "Mr. Lee always has dinner at 7 o’clock and watches TV in the evening.",
            rubric: "Viết đúng câu: 'Mr. Lee always has dinner at 7 o'clock and watches TV in the evening.' (2.0 điểm). Chia sai động từ hoặc thiếu giới từ trừ 0.5 điểm mỗi lỗi."
          },
          {
            id: "Q2_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: My mom / make / car-shaped birthday cake / a new shirt / me / last week /.//",
            modelAnswer: "My mom made a car-shaped birthday cake and a new shirt for me last week.",
            rubric: "Viết đúng câu ở thì quá khứ: 'My mom made a car-shaped birthday cake and a new shirt for me last week.' (2.0 điểm)."
          },
          {
            id: "Q2_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: I / happy / back at school / spend time / my classmates /.//",
            modelAnswer: "I am (very) happy to be back at school and spend time with my classmates.",
            rubric: "Viết đúng câu: 'I am (very) happy to be back at school and spend time with my classmates.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Đề thi số 3 (Chính thức năm 2025)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Read the following passage carefully. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Artificial Intelligence (AI) has become a (0) <strong>common</strong> part of modern education. Many schools and universities now use AI tools to support both teachers and students. The main (1) __________ of AI is its ability to personalize lessons for each student. AI can analyze students’ strengths and weaknesses, then suggest exercises that (2) __________ their needs. This helps students learn at their own pace and improve their schoolwork faster. However, personally, it also has some disadvantages. Some students may become too (3) __________ on AI and lose important skills such as critical thinking, creativity, and teamwork. In addition, not all students have equal access to technology, which can create a gap between different groups. In conclusion, teachers and students should use AI wisely, combining it with (4) __________ methods to achieve the best results.<br><br>
        Question 0: (common / rare / unique) [Đã làm mẫu]<br>
        Question 1: (advantage / difficulty / opinion)<br>
        Question 2: (score / meet / replace)<br>
        Question 3: (proud / interested / dependent)<br>
        Question 4: (traditionally / traditional / tradition)`,
        questions: [
          {
            id: "Q3_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (advantage / difficulty / opinion)",
            modelAnswer: "advantage",
            rubric: "Điền đúng từ 'advantage' (2.0 điểm)."
          },
          {
            id: "Q3_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (score / meet / replace)",
            modelAnswer: "meet",
            rubric: "Điền đúng từ 'meet' (2.0 điểm)."
          },
          {
            id: "Q3_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (proud / interested / dependent)",
            modelAnswer: "dependent",
            rubric: "Điền đúng từ 'dependent' (2.0 điểm)."
          },
          {
            id: "Q3_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (traditionally / traditional / tradition)",
            modelAnswer: "traditional",
            rubric: "Điền đúng từ 'traditional' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the following passage carefully. Do the tasks below the passage. (8.0 pts)",
        passage: `Some scientists believe the Earth is 4.6 billion years old. However, the mountains, valleys, rivers, deserts and forests we see today are much younger than that. For example, Mount Everest is about 60 million years old and the Amazon Rainforest is only 10 million years old. The youngest sea in the world is the Baltic Sea, about 15,000 years old. The Earth is always changing because of volcanoes, earthquakes and, of course, wind and rain. Some of these changes are very slow and others are quick. Water and ice can make very big changes to the planet. For example, glaciers can cut through mountains and make deep valleys. It's normal for our planet to change. At the moment, some scientists think it's changing faster than usual. They don't understand everything that is happening, but they know that temperatures are rising. The weather is getting wetter in some places and drier in others, and there are more big storms. However, these changes are not bad for everyone. Because the Arctic is getting warmer, some people in Greenland now own businesses that grow and sell vegetables. That wasn't possible 50 years ago. Farmers in Greenland like the warm weather and hope it will continue.`,
        questions: [
          {
            id: "Q3_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 5: Decide whether this sentence is True or False: The Baltic Sea is much older than the Amazon Rainforest.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Biển Baltic 15,000 năm tuổi, rừng Amazon 10 triệu năm tuổi nên biển Baltic trẻ hơn nhiều)."
          },
          {
            id: "Q3_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 6: Decide whether this sentence is True or False: Our planet is changing, but these changes are also good news for one part of the world.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm). (Các thay đổi giúp người dân đảo Greenland có thể trồng trọt rau quả bán kiếm tiền)."
          },
          {
            id: "Q3_7",
            type: "mc",
            options: [
              "A. rivers of lava",
              "B. rivers of flood",
              "C. rivers of ice"
            ],
            maxPoints: 2.0,
            text: "Question 7: What can cut through mountains and make deep valleys?",
            modelAnswer: "C",
            rubric: "Chọn 'C' hoặc điền 'rivers of ice' (2.0 điểm)."
          },
          {
            id: "Q3_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 8: Write down ONE word that you find in the passage which means 'commercial organizations such as companies, shops or factories'.",
            modelAnswer: "businesses",
            rubric: "Tìm đúng từ 'businesses' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q3_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 9: celebrated the 50th anniversary / and National Reunification on / Việt Nam / of the Liberation of Southern Việt Nam / April 30th, 2025 / .//",
            modelAnswer: "Việt Nam celebrated the 50th anniversary of the Liberation of Southern Việt Nam and National Reunification on April 30th, 2025.",
            rubric: "Sắp xếp đúng: 'Việt Nam celebrated the 50th anniversary of the Liberation of Southern Việt Nam and National Reunification on April 30th, 2025.' (2.0 điểm)."
          },
          {
            id: "Q3_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 10: from sunlight and take / plants / in carbon dioxide from / get energy / the air through their leaves /.//",
            modelAnswer: "Plants get energy from sunlight and take in carbon dioxide from the air through their leaves.",
            rubric: "Sắp xếp đúng: 'Plants get energy from sunlight and take in carbon dioxide from the air through their leaves.' (2.0 điểm)."
          },
          {
            id: "Q3_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 11: ChatGPT proved / in their studies / to be a / numerous students / helpful tool for /.//",
            modelAnswer: "ChatGPT proved to be a helpful tool for numerous students in their studies.",
            rubric: "Sắp xếp đúng: 'ChatGPT proved to be a helpful tool for numerous students in their studies.' (2.0 điểm)."
          },
          {
            id: "Q3_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 12: to use public transportation / Hồ Chí Minh City / building / will encourage more people / new metro lines in /.//",
            modelAnswer: "Building new metro lines in Hồ Chí Minh City will encourage more people to use public transportation.",
            rubric: "Sắp xếp đúng: 'Building new metro lines in Hồ Chí Minh City will encourage more people to use public transportation.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q3_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 13: Sunflower Park / be / one of / most famous / landmark / Thủ Đức City /.//",
            modelAnswer: "Sunflower Park is one of the most famous landmarks in Thủ Đức City.",
            rubric: "Viết đúng câu: 'Sunflower Park is one of the most famous landmarks in Thủ Đức City.' (2.0 điểm). Thiếu 'the' hoặc thiếu 's' ở 'landmarks' trừ 0.5 điểm mỗi lỗi."
          },
          {
            id: "Q3_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 14: It / be / important / us / protect our environment / the effects of air pollution /.//",
            modelAnswer: "It is important for us to protect our environment from the effects of air pollution.",
            rubric: "Viết đúng câu: 'It is important for us to protect our environment from the effects of air pollution.' (2.0 điểm)."
          },
          {
            id: "Q3_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 15: Thủ Đức City’s / students / participate / STEM Day / active / March 29th, 2025 /.//",
            modelAnswer: "Thủ Đức City’s students participated in STEM Day actively on March 29th, 2025.",
            rubric: "Viết đúng câu ở thì quá khứ: 'Thủ Đức City’s students participated in STEM Day actively on March 29th, 2025.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Đề thi số 4 (Biên soạn - Saving Water & Environment)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Water is essential for all life on Earth. However, many people still (1) __________ water in their daily activities. We can easily save water by turning off the tap while brushing our (2) __________. Another way is to collect rainwater to water plants in the garden. In many dry regions, saving water is extremely (3) __________ because people do not have enough clean water for drinking. By taking small actions, we can protect our precious water source and keep the environment (4) __________.<br><br>
        Question 1: (waste / use / buy)<br>
        Question 2: (shoes / teeth / hands)<br>
        Question 3: (important / easy / common)<br>
        Question 4: (dirty / dangerous / clean)`,
        questions: [
          {
            id: "Q4_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (waste / use / buy)",
            modelAnswer: "waste",
            rubric: "Điền đúng từ 'waste' (2.0 điểm)."
          },
          {
            id: "Q4_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (shoes / teeth / hands)",
            modelAnswer: "teeth",
            rubric: "Điền đúng từ 'teeth' (2.0 điểm)."
          },
          {
            id: "Q4_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (important / easy / common)",
            modelAnswer: "important",
            rubric: "Điền đúng từ 'important' (2.0 điểm)."
          },
          {
            id: "Q4_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (dirty / dangerous / clean)",
            modelAnswer: "clean",
            rubric: "Điền đúng từ 'clean' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `Plastic pollution is a big problem for our oceans. Every year, millions of tons of plastic waste are thrown into the sea. Sea animals like turtles and dolphins often mistake plastic bags for food. When they eat plastic, they can get very sick or even die. To solve this problem, many schools have started recycling programs. Students collect old plastic bottles and containers to make new things. Some schools also encourage students to bring reusable water bottles instead of buying single-use plastic ones. If everyone works together, we can reduce plastic waste and save marine life.`,
        questions: [
          {
            id: "Q4_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Every year, dolphins and turtles get sick because they eat plastic bags.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q4_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: Schools only recycle plastic bottles to buy new things.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Học sinh thu gom chai nhựa cũ để làm đồ dùng mới chứ không phải để bán lấy tiền mua đồ)."
          },
          {
            id: "Q4_7",
            type: "mc",
            options: [
              "A. paper boxes",
              "B. reusable water bottles",
              "C. single-use plastic cups"
            ],
            maxPoints: 2.0,
            text: "Question 3: What can students bring to school to reduce plastic waste?",
            modelAnswer: "B",
            rubric: "Chọn 'B' hoặc điền 'reusable water bottles' (2.0 điểm)."
          },
          {
            id: "Q4_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'keep safe from harm, injury or death'.",
            modelAnswer: "save",
            rubric: "Tìm đúng từ 'save' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q4_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: protect the environment / should recycle / we / to / plastic bottles /.//",
            modelAnswer: "We should recycle plastic bottles to protect the environment.",
            rubric: "Sắp xếp đúng: 'We should recycle plastic bottles to protect the environment.' (2.0 điểm)."
          },
          {
            id: "Q4_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: in the garden / collected / she / to water / rainwater / plants /.//",
            modelAnswer: "She collected rainwater to water plants in the garden.",
            rubric: "Sắp xếp đúng: 'She collected rainwater to water plants in the garden.' (2.0 điểm)."
          },
          {
            id: "Q4_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: water pollution / dumping trash / rivers / will cause / into /.//",
            modelAnswer: "Dumping trash into rivers will cause water pollution.",
            rubric: "Sắp xếp đúng: 'Dumping trash into rivers will cause water pollution.' (2.0 điểm)."
          },
          {
            id: "Q4_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: their teeth / children / turn off / should / the tap when brushing /.//",
            modelAnswer: "Children should turn off the tap when brushing their teeth.",
            rubric: "Sắp xếp đúng: 'Children should turn off the tap when brushing their teeth.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q4_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: We / save / water / home / school / every day /.//",
            modelAnswer: "We save water at home and school every day. (hoặc: We save water at home and at school every day.)",
            rubric: "Viết đúng câu: 'We save water at home and school every day.' (2.0 điểm)."
          },
          {
            id: "Q4_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: They / clean / local park / friends / last Sunday /.//",
            modelAnswer: "They cleaned the local park with their friends last Sunday. (hoặc: They cleaned a local park with their friends last Sunday.)",
            rubric: "Viết đúng câu thì quá khứ: 'They cleaned the local park with their friends last Sunday.' (2.0 điểm)."
          },
          {
            id: "Q4_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: It / be / important / plant / trees / school playground /.//",
            modelAnswer: "It is important to plant trees in the school playground. (hoặc: It is important to plant trees in our school playground.)",
            rubric: "Viết đúng câu: 'It is important to plant trees in the school playground.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Đề thi số 5 (Biên soạn - Digital Citizenship & Cyber Safety)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Nowadays, many children use the Internet to study and play games. However, they should learn how to stay (1) __________ online. It is important to keep your personal information private, such as your full name and phone (2) __________. You should never share your password with anyone, except your parents. If you see something online that makes you feel (3) __________, you must tell a teacher or a parent immediately. Being a good digital citizen means using technology (4) __________ and showing respect to others.<br><br>
        Question 1: (safe / dangerous / noisy)<br>
        Question 2: (address / number / book)<br>
        Question 3: (uncomfortable / happy / excited)<br>
        Question 4: (carelessly / wisely / quickly)`,
        questions: [
          {
            id: "Q5_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (safe / dangerous / noisy)",
            modelAnswer: "safe",
            rubric: "Điền đúng từ 'safe' (2.0 điểm)."
          },
          {
            id: "Q5_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (address / number / book)",
            modelAnswer: "number",
            rubric: "Điền đúng từ 'number' (2.0 điểm)."
          },
          {
            id: "Q5_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (uncomfortable / happy / excited)",
            modelAnswer: "uncomfortable",
            rubric: "Điền đúng từ 'uncomfortable' (2.0 điểm)."
          },
          {
            id: "Q5_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (carelessly / wisely / quickly)",
            modelAnswer: "wisely",
            rubric: "Điền đúng từ 'wisely' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `Cyber safety is very important for primary school students. When you are online, you can learn many interesting things, but there are also some risks. For example, some websites may contain bad information or viruses that can damage your computer. To protect your devices, you should only visit websites that are recommended by your teachers or parents. Moreover, you should be polite when posting comments or chatting with friends online. Bullying others on the Internet, which is called cyberbullying, is not acceptable. Remember, what you post online can stay there for a long time, so think carefully before you click.`,
        questions: [
          {
            id: "Q5_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Students can visit any websites they want without asking their parents.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm)."
          },
          {
            id: "Q5_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: Cyberbullying means being polite to others on the Internet.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Cyberbullying nghĩa là bắt nạt qua mạng, ngược lại với polite)."
          },
          {
            id: "Q5_7",
            type: "mc",
            options: [
              "A. good information",
              "B. viruses",
              "C. polite comments"
            ],
            maxPoints: 2.0,
            text: "Question 3: What can damage your computer when you visit unsafe websites?",
            modelAnswer: "B",
            rubric: "Chọn 'B' hoặc điền 'viruses' (2.0 điểm)."
          },
          {
            id: "Q5_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Find ONE word in the passage which means 'things that are correct, proper, or allowed'.",
            modelAnswer: "acceptable",
            rubric: "Tìm đúng từ 'acceptable' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q5_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: your personal / should keep / you / private / online / information /.//",
            modelAnswer: "You should keep your personal information private online.",
            rubric: "Sắp xếp đúng: 'You should keep your personal information private online.' (2.0 điểm)."
          },
          {
            id: "Q5_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: parents or teachers / talk to / if you / feel uncomfortable / always / /.//",
            modelAnswer: "Always talk to parents or teachers if you feel uncomfortable. (hoặc: Always talk to teachers or parents if you feel uncomfortable.)",
            rubric: "Sắp xếp đúng: 'Always talk to parents or teachers if you feel uncomfortable.' (2.0 điểm)."
          },
          {
            id: "Q5_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: a helpful tool / the Internet / is / for our studies / if used wisely /.//",
            modelAnswer: "The Internet is a helpful tool for our studies if used wisely.",
            rubric: "Sắp xếp đúng: 'The Internet is a helpful tool for our studies if used wisely.' (2.0 điểm)."
          },
          {
            id: "Q5_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: your passwords / with / do not / share / strangers / online /.//",
            modelAnswer: "Do not share your passwords with strangers online.",
            rubric: "Sắp xếp đúng: 'Do not share your passwords with strangers online.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q5_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: I / learn / how / use / Internet / safely / school / yesterday /.//",
            modelAnswer: "I learned how to use the Internet safely at school yesterday. (hoặc: I learnt how to use the Internet safely at school yesterday.)",
            rubric: "Viết đúng câu quá khứ: 'I learned how to use the Internet safely at school yesterday.' (2.0 điểm)."
          },
          {
            id: "Q5_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: It / be / dangerous / share / phone number / strangers /.//",
            modelAnswer: "It is dangerous to share your phone number with strangers.",
            rubric: "Viết đúng câu: 'It is dangerous to share your phone number with strangers.' (2.0 điểm)."
          },
          {
            id: "Q5_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: We / should / be / polite / when / chat / friends / online /.//",
            modelAnswer: "We should be polite when chatting with friends online. (hoặc: We should be polite when chatting with our friends online.)",
            rubric: "Viết đúng câu: 'We should be polite when chatting with friends online.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Đề thi số 6 (Biên soạn - Healthy Life & Sports)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Having a healthy lifestyle is very important for children. To keep fit, you should eat a variety of (1) __________ food like fruits, vegetables, and fish. It is also necessary to (2) __________ physical activities every day. Playing sports such as basketball, swimming, or running helps you grow stronger. Besides, you need to get enough sleep, which is about 8 to 10 hours a night. Spending too much time on screens can make you (3) __________ and sleep poorly. Therefore, try to limit your screen time and (4) __________ more time outdoors with your friends.<br><br>
        Question 1: (junk / healthy / sweet)<br>
        Question 2: (do / make / play)<br>
        Question 3: (strong / tired / happy)<br>
        Question 4: (spend / take / give)`,
        questions: [
          {
            id: "Q6_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (junk / healthy / sweet)",
            modelAnswer: "healthy",
            rubric: "Điền đúng từ 'healthy' (2.0 điểm)."
          },
          {
            id: "Q6_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (do / make / play)",
            modelAnswer: "do",
            rubric: "Điền đúng từ 'do' (2.0 điểm)."
          },
          {
            id: "Q6_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (strong / tired / happy)",
            modelAnswer: "tired",
            rubric: "Điền đúng từ 'tired' (2.0 điểm)."
          },
          {
            id: "Q6_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (spend / take / give)",
            modelAnswer: "spend",
            rubric: "Điền đúng từ 'spend' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `Sports play a vital role in school life. They do not only improve students' physical health but also teach them valuable life lessons. When students play team sports like football or volleyball, they learn how to cooperate with their teammates to win a match. They also learn how to respect their opponents and accept defeat with a good attitude. This is called sportsmanship. Many schools organize sports days every year to encourage all students to participate. Winning is exciting, but the most important thing is to do your best and have fun with your classmates.`,
        questions: [
          {
            id: "Q6_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Playing team sports helps students learn how to work together.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q6_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: Sportsmanship means trying to win at all costs without respecting others.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Tinh thần thể thao đòi hỏi tôn trọng đối thủ và chấp nhận thua cuộc)."
          },
          {
            id: "Q6_7",
            type: "mc",
            options: [
              "A. sports days",
              "B. science weeks",
              "C. computer classes"
            ],
            maxPoints: 2.0,
            text: "Question 3: What do schools organize every year to encourage all students to participate?",
            modelAnswer: "A",
            rubric: "Chọn 'A' hoặc điền 'sports days' (2.0 điểm)."
          },
          {
            id: "Q6_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'people or teams that you play against in a game'.",
            modelAnswer: "opponents",
            rubric: "Tìm đúng từ 'opponents' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q6_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: fruits and vegetables / we / healthy / should eat / to stay /.//",
            modelAnswer: "We should eat fruits and vegetables to stay healthy.",
            rubric: "Sắp xếp đúng: 'We should eat fruits and vegetables to stay healthy.' (2.0 điểm)."
          },
          {
            id: "Q6_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: cooperate / team sports / playing / helps / with others / students / .//",
            modelAnswer: "Playing team sports helps students cooperate with others.",
            rubric: "Sắp xếp đúng: 'Playing team sports helps students cooperate with others.' (2.0 điểm)."
          },
          {
            id: "Q6_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: limit / we / should / screen time / to protect / our eyes /.//",
            modelAnswer: "We should limit screen time to protect our eyes.",
            rubric: "Sắp xếp đúng: 'We should limit screen time to protect our eyes.' (2.0 điểm)."
          },
          {
            id: "Q6_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: go to bed / don't / forget to / early / to get / enough sleep /.//",
            modelAnswer: "Don’t forget to go to bed early to get enough sleep.",
            rubric: "Sắp xếp đúng: 'Don't forget to go to bed early to get enough sleep.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q6_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: My brother / play / football / school yard / every afternoon /.//",
            modelAnswer: "My brother plays football in the school yard every afternoon.",
            rubric: "Viết đúng câu: 'My brother plays football in the school yard every afternoon.' (2.0 điểm)."
          },
          {
            id: "Q6_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: It / be / good / us / do / exercise / morning /.//",
            modelAnswer: "It is good for us to do exercise in the morning. (hoặc: It is good for us to do exercises in the morning.)",
            rubric: "Viết đúng câu: 'It is good for us to do exercise in the morning.' (2.0 điểm)."
          },
          {
            id: "Q6_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: She / start / practice / yoga / two months / ago /.//",
            modelAnswer: "She started practicing yoga two months ago. (hoặc: She started practising yoga two months ago.)",
            rubric: "Viết đúng câu thì quá khứ: 'She started practicing yoga two months ago.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Đề thi số 7 (Biên soạn - Renewable Energy & Climate Change)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Fossil fuels like coal, oil, and gas are limited resources. Using them to make electricity creates a lot of air pollution and (1) __________ climate change. That is why scientists are looking for renewable sources of energy. Solar energy is one of the most popular renewable sources because it is clean and (2) __________. We can get energy from the sun using solar panels (3) __________ on the roofs of houses. Wind and water are also great sources of clean energy. Using these sources helps (4) __________ the environment and keep our air clean for future generations.<br><br>
        Question 1: (causes / reduces / stops)<br>
        Question 2: (expensive / unlimited / dangerous)<br>
        Question 3: (placed / bought / thrown)<br>
        Question 4: (damage / protect / pollute)`,
        questions: [
          {
            id: "Q7_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (causes / reduces / stops)",
            modelAnswer: "causes",
            rubric: "Điền đúng từ 'causes' (2.0 điểm)."
          },
          {
            id: "Q7_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (expensive / unlimited / dangerous)",
            modelAnswer: "unlimited",
            rubric: "Điền đúng từ 'unlimited' (2.0 điểm)."
          },
          {
            id: "Q7_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (placed / bought / thrown)",
            modelAnswer: "placed",
            rubric: "Điền đúng từ 'placed' (2.0 điểm)."
          },
          {
            id: "Q7_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (damage / protect / pollute)",
            modelAnswer: "protect",
            rubric: "Điền đúng từ 'protect' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `Climate change is causing global temperatures to rise. This is leading to many problems around the world, such as melting glaciers and rising sea levels. Some islands and coastal cities are now in danger of flooding. To fight climate change, many countries are replacing coal power plants with wind farms and solar parks. These clean energy sources do not produce greenhouse gases. In addition, individuals can help by saving energy in their homes, such as turning off appliances when they are not in use and using public transportation. Every small action helps to protect our planet.`,
        questions: [
          {
            id: "Q7_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Melting glaciers and rising sea levels are caused by climate change.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q7_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: Wind farms and solar parks produce a lot of greenhouse gases.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Đoạn văn ghi rõ các nguồn năng lượng sạch không tạo ra khí nhà kính)."
          },
          {
            id: "Q7_7",
            type: "mc",
            options: [
              "A. use more coal",
              "B. save energy",
              "C. leave appliances on"
            ],
            maxPoints: 2.0,
            text: "Question 3: What can individuals do at home to help fight climate change?",
            modelAnswer: "B",
            rubric: "Chọn 'B' hoặc điền 'save energy' (2.0 điểm)."
          },
          {
            id: "Q7_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'devices or machines in the home that use electricity'.",
            modelAnswer: "appliances",
            rubric: "Tìm đúng từ 'appliances' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q7_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: clean electricity / solar panels / help us / from sunlight / make / .//",
            modelAnswer: "Solar panels help us make clean electricity from sunlight.",
            rubric: "Sắp xếp đúng: 'Solar panels help us make clean electricity from sunlight.' (2.0 điểm)."
          },
          {
            id: "Q7_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: climate change / greenhouse gases / from coal plants / will cause / .//",
            modelAnswer: "Greenhouse gases from coal plants will cause climate change.",
            rubric: "Sắp xếp đúng: 'Greenhouse gases from coal plants will cause climate change.' (2.0 điểm)."
          },
          {
            id: "Q7_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: clean energy / wind turbines / are used / to produce / in wind farms / .//",
            modelAnswer: "Wind turbines are used to produce clean energy in wind farms.",
            rubric: "Sắp xếp đúng: 'Wind turbines are used to produce clean energy in wind farms.' (2.0 điểm)."
          },
          {
            id: "Q7_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: to save / remember to / turn off / electricity / the TV / before sleeping / .//",
            modelAnswer: "Remember to turn off the TV before sleeping to save electricity.",
            rubric: "Sắp xếp đúng: 'Remember to turn off the TV before sleeping to save electricity.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q7_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: Solar energy / be / clean / and / it / not / cause / pollution /.//",
            modelAnswer: "Solar energy is clean and it does not cause pollution.",
            rubric: "Viết đúng câu: 'Solar energy is clean and it does not cause pollution.' (2.0 điểm)."
          },
          {
            id: "Q7_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: They / build / new wind farm / our province / next year /.//",
            modelAnswer: "They will build a new wind farm in our province next year.",
            rubric: "Viết đúng câu thì tương lai: 'They will build a new wind farm in our province next year.' (2.0 điểm)."
          },
          {
            id: "Q7_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: It / be / necessary / reduce / use / fossil / fuels / today /.//",
            modelAnswer: "It is necessary to reduce the use of fossil fuels today.",
            rubric: "Viết đúng câu: 'It is necessary to reduce the use of fossil fuels today.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Đề thi số 8 (Biên soạn - Space Exploration & Planets)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `For thousands of years, humans have looked at the night sky and wondered about space. Today, astronauts can travel into space to (1) __________ other planets. The Solar System has eight planets that move (2) __________ the Sun. Earth is the third planet and the only one known to have life. Mars, the fourth planet, is often called the Red Planet because of its red soil. Scientists are sending robotic (3) __________ to Mars to search for water. In the future, humans might even (4) __________ on Mars and build cities there.<br><br>
        Question 1: (protect / explore / destroy)<br>
        Question 2: (around / over / under)<br>
        Question 3: (cars / planes / rovers)<br>
        Question 4: (live / run / swim)`,
        questions: [
          {
            id: "Q8_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (protect / explore / destroy)",
            modelAnswer: "explore",
            rubric: "Điền đúng từ 'explore' (2.0 điểm)."
          },
          {
            id: "Q8_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (around / over / under)",
            modelAnswer: "around",
            rubric: "Điền đúng từ 'around' (2.0 điểm)."
          },
          {
            id: "Q8_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (cars / planes / rovers)",
            modelAnswer: "rovers",
            rubric: "Điền đúng từ 'rovers' (2.0 điểm)."
          },
          {
            id: "Q8_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (live / run / swim)",
            modelAnswer: "live",
            rubric: "Điền đúng từ 'live' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `The International Space Station (ISS) is a large spacecraft that orbits the Earth. It is a home and a science lab where astronauts from different countries live and work. On the ISS, astronauts do scientific experiments that cannot be done on Earth because there is no gravity. Without gravity, objects float in the air, and astronauts must exercise every day to keep their muscles strong. The ISS moves very fast, completing one orbit of the Earth every 90 minutes. This means astronauts on board can see the sun rise and set 16 times in one day! It is an amazing example of international cooperation.`,
        questions: [
          {
            id: "Q8_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Astronauts can do experiments on the ISS that are impossible on Earth.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q8_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: There is strong gravity on the International Space Station.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Trên trạm vũ trụ không có lực hấp dẫn - no gravity)."
          },
          {
            id: "Q8_7",
            type: "mc",
            options: [
              "A. every 16 hours",
              "B. every 90 minutes",
              "C. every 90 days"
            ],
            maxPoints: 2.0,
            text: "Question 3: How often does the ISS complete one orbit around the Earth?",
            modelAnswer: "B",
            rubric: "Chọn 'B' hoặc điền 'every 90 minutes' (2.0 điểm)."
          },
          {
            id: "Q8_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'the force that pulls objects toward each other, or toward the Earth'.",
            modelAnswer: "gravity",
            rubric: "Tìm đúng từ 'gravity' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q8_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: around the Sun / eight planets / move / in our Solar System /.//",
            modelAnswer: "Eight planets move around the Sun in our Solar System.",
            rubric: "Sắp xếp đúng: 'Eight planets move around the Sun in our Solar System.' (2.0 điểm)."
          },
          {
            id: "Q8_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: experiment / the astronauts / a science / carried out / last week / .//",
            modelAnswer: "The astronauts carried out a science experiment last week.",
            rubric: "Sắp xếp đúng: 'The astronauts carried out a science experiment last week.' (2.0 điểm)."
          },
          {
            id: "Q8_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: gravity / objects / float / because / there is / no / .//",
            modelAnswer: "Objects float because there is no gravity.",
            rubric: "Sắp xếp đúng: 'Objects float because there is no gravity.' (2.0 điểm)."
          },
          {
            id: "Q8_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: a spacecraft / the ISS / that / orbits / the Earth / is / .//",
            modelAnswer: "The ISS is a spacecraft that orbits the Earth.",
            rubric: "Sắp xếp đúng: 'The ISS is a spacecraft that orbits the Earth.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q8_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: Neil Armstrong / be / first man / walk / the Moon /.//",
            modelAnswer: "Neil Armstrong was the first man to walk on the Moon.",
            rubric: "Viết đúng câu quá khứ: 'Neil Armstrong was the first man to walk on the Moon.' (2.0 điểm)."
          },
          {
            id: "Q8_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: Scientists / want / find / water / Mars / future /.//",
            modelAnswer: "Scientists want to find water on Mars in the future.",
            rubric: "Viết đúng câu: 'Scientists want to find water on Mars in the future.' (2.0 điểm)."
          },
          {
            id: "Q8_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: Astronauts / have to / exercise / every day / space / .//",
            modelAnswer: "Astronauts have to exercise every day in space.",
            rubric: "Viết đúng câu: 'Astronauts have to exercise every day in space.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Đề thi số 9 (Biên soạn - Wildlife & Marine Conservation)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Forests are home to millions of animal and plant species. However, human activities like cutting down trees are destroying these habitats. When animals (1) __________ their homes, they are in danger of extinction. Tigers, pandas, and elephants are examples of (2) __________ animals that we need to protect. National parks are created to provide a safe place for wildlife to live. Protecting forests not only saves animals but also helps keep the Earth's climate stable. We should support conservation projects to (3) __________ our planet's biodiversity (4) __________ the future.<br><br>
        Question 1: (lose / find / buy)<br>
        Question 2: (domestic / endangered / common)<br>
        Question 3: (preserve / damage / forget)<br>
        Question 4: (for / in / on)`,
        questions: [
          {
            id: "Q9_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (lose / find / buy)",
            modelAnswer: "lose",
            rubric: "Điền đúng từ 'lose' (2.0 điểm)."
          },
          {
            id: "Q9_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (domestic / endangered / common)",
            modelAnswer: "endangered",
            rubric: "Điền đúng từ 'endangered' (2.0 điểm)."
          },
          {
            id: "Q9_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (preserve / damage / forget)",
            modelAnswer: "preserve",
            rubric: "Điền đúng từ 'preserve' (2.0 điểm)."
          },
          {
            id: "Q9_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (for / in / on)",
            modelAnswer: "for",
            rubric: "Điền đúng từ 'for' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `Coral reefs are often called the rainforests of the sea because they are home to a quarter of all marine species. They provide food and shelter for fish, crabs, and sea turtles. However, coral reefs are in danger due to water pollution and rising ocean temperatures. When the water gets too warm, corals turn white and die. This is called coral bleaching. To protect these beautiful ecosystems, scientists are growing corals in laboratories and planting them back into the ocean. By reducing plastic waste and carbon emissions, we can help save coral reefs and the marine life that depends on them.`,
        questions: [
          {
            id: "Q9_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Coral reefs are home to 25% of all sea species.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm). (A quarter = 1/4 = 25%)."
          },
          {
            id: "Q9_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: Coral bleaching happens when the ocean water gets too cold.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Hiện tượng này xảy ra khi nước quá nóng - too warm)."
          },
          {
            id: "Q9_7",
            type: "mc",
            options: [
              "A. grow corals in laboratories",
              "B. catch all sea turtles",
              "C. dump waste into the sea"
            ],
            maxPoints: 2.0,
            text: "Question 3: What do scientists do to protect coral reef ecosystems?",
            modelAnswer: "A",
            rubric: "Chọn 'A' hoặc điền 'grow corals in laboratories' (2.0 điểm)."
          },
          {
            id: "Q9_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'a place that provides protection from bad weather or danger'.",
            modelAnswer: "shelter",
            rubric: "Tìm đúng từ 'shelter' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q9_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: protect / endangered animals / we / must / from / hunters / .//",
            modelAnswer: "We must protect endangered animals from hunters.",
            rubric: "Sắp xếp đúng: 'We must protect endangered animals from hunters.' (2.0 điểm)."
          },
          {
            id: "Q9_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: national parks / wild animals / live / in / safely / can / .//",
            modelAnswer: "Wild animals can live safely in national parks.",
            rubric: "Sắp xếp đúng: 'Wild animals can live safely in national parks.' (2.0 điểm)."
          },
          {
            id: "Q9_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: rainforests of / are called / the sea / coral reefs / the / .//",
            modelAnswer: "Coral reefs are called the rainforests of the sea.",
            rubric: "Sắp xếp đúng: 'Coral reefs are called the rainforests of the sea.' (2.0 điểm)."
          },
          {
            id: "Q9_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: destroy / cutting down / the habitats / forests / will / of many animals / .//",
            modelAnswer: "Cutting down forests will destroy the habitats of many animals.",
            rubric: "Sắp xếp đúng: 'Cutting down forests will destroy the habitats of many animals.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q9_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: Tigers / be / danger / extinction / because / hunting /.//",
            modelAnswer: "Tigers are in danger of extinction because of hunting.",
            rubric: "Viết đúng câu: 'Tigers are in danger of extinction because of hunting.' (2.0 điểm)."
          },
          {
            id: "Q9_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: They / set up / new nature reserve / last month / .//",
            modelAnswer: "They set up a new nature reserve last month.",
            rubric: "Viết đúng câu quá khứ: 'They set up a new nature reserve last month.' (2.0 điểm)."
          },
          {
            id: "Q9_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: It / be / vital / protect / marine life / ocean pollution / .//",
            modelAnswer: "It is vital to protect marine life from ocean pollution.",
            rubric: "Viết đúng câu: 'It is vital to protect marine life from ocean pollution.' (2.0 điểm)."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Đề thi số 10 (Biên soạn - Smart Education & E-learning)",
    duration: 30,
    totalPoints: 30.0,
    subject: "english",
    hasListening: false,
    parts: [
      {
        title: "PART ONE. READING (16.0 pts)",
        description: "I. Choose the word that best fits each space. WRITE THE WORD IN THE BLANK. (8.0 pts)",
        passage: `Technology has changed the way we learn. E-learning, or online learning, allows students to study from home using computers and the Internet. Students can attend virtual classes and (1) __________ teachers from different cities or countries. E-learning platforms offer many (2) __________ materials like educational videos, games, and quizzes. This makes lessons more interesting and interactive. However, students should not spend all day (3) __________ screens. They also need to do physical activities, read paper books, and (4) __________ time with their family and friends in real life.<br><br>
        Question 1: (meet / avoid / write)<br>
        Question 2: (useful / boring / expensive)<br>
        Question 3: (looking at / talking to / working with)<br>
        Question 4: (spend / take / save)`,
        questions: [
          {
            id: "Q10_1",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: (meet / avoid / write)",
            modelAnswer: "meet",
            rubric: "Điền đúng từ 'meet' (2.0 điểm)."
          },
          {
            id: "Q10_2",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: (useful / boring / expensive)",
            modelAnswer: "useful",
            rubric: "Điền đúng từ 'useful' (2.0 điểm)."
          },
          {
            id: "Q10_3",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: (looking at / talking to / working with)",
            modelAnswer: "looking at",
            rubric: "Điền đúng từ 'looking at' (2.0 điểm)."
          },
          {
            id: "Q10_4",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: (spend / take / save)",
            modelAnswer: "spend",
            rubric: "Điền đúng từ 'spend' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART ONE. READING - SECTION II (8.0 pts)",
        description: "II. Read the passage and answer the questions below. (8.0 pts)",
        passage: `Smart schools are using modern technology to improve education. In these schools, classrooms are equipped with interactive smartboards instead of traditional blackboards. Teachers can show educational videos, search for information on the spot, and display 3D models. Students use tablets to read digital textbooks and submit their homework online. This reduces the amount of paper used, which is good for the environment. However, teachers say that technology is only a tool. The most important part of education is still the interaction between teachers and students, and the development of social skills like communication and teamwork.`,
        questions: [
          {
            id: "Q10_5",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 1: Decide whether this sentence is True or False: Smartboards are used to replace traditional blackboards in smart schools.",
            modelAnswer: "True",
            rubric: "Chọn 'True' (2.0 điểm)."
          },
          {
            id: "Q10_6",
            type: "tf",
            maxPoints: 2.0,
            text: "Question 2: Decide whether this sentence is True or False: Using tablets for homework increases the amount of paper used.",
            modelAnswer: "False",
            rubric: "Chọn 'False' (2.0 điểm). (Sử dụng máy tính bảng giúp giảm bớt lượng giấy tiêu thụ)."
          },
          {
            id: "Q10_7",
            type: "mc",
            options: [
              "A. smartboards and tablets",
              "B. interaction and social skills",
              "C. digital textbooks"
            ],
            maxPoints: 2.0,
            text: "Question 3: What is still the most important part of education according to teachers?",
            modelAnswer: "B",
            rubric: "Chọn 'B' hoặc điền 'interaction and social skills' (2.0 điểm)."
          },
          {
            id: "Q10_8",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: Write down ONE word that you find in the passage which means 'the process of working together with a group of people to achieve a goal'.",
            modelAnswer: "teamwork",
            rubric: "Tìm đúng từ 'teamwork' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING (14.0 pts)",
        description: "I. Rearrange the groups of words in the correct order to make complete sentences. (8.0 pts)",
        questions: [
          {
            id: "Q10_9",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: traditional blackboards / smartboards / are used / instead of / in classrooms / .//",
            modelAnswer: "Smartboards are used instead of traditional blackboards in classrooms.",
            rubric: "Sắp xếp đúng: 'Smartboards are used instead of traditional blackboards in classrooms.' (2.0 điểm)."
          },
          {
            id: "Q10_10",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: study / from home / online learning / students / to / helps / .//",
            modelAnswer: "Online learning helps students to study from home.",
            rubric: "Sắp xếp đúng: 'Online learning helps students to study from home.' (2.0 điểm)."
          },
          {
            id: "Q10_11",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: tablets / digital textbooks / students / use / to read / .//",
            modelAnswer: "Students use tablets to read digital textbooks.",
            rubric: "Sắp xếp đúng: 'Students use tablets to read digital textbooks.' (2.0 điểm)."
          },
          {
            id: "Q10_12",
            type: "text",
            maxPoints: 2.0,
            text: "Question 4: reduces / paper used / the amount of / using smart technology / .//",
            modelAnswer: "Using smart technology reduces the amount of paper used.",
            rubric: "Sắp xếp đúng: 'Using smart technology reduces the amount of paper used.' (2.0 điểm)."
          }
        ]
      },
      {
        title: "PART TWO. WRITING - SECTION II (6.0 pts)",
        description: "II. Write complete sentences with the given cues. You must write NO MORE THAN fifteen words for each sentence. (6.0 pts)",
        questions: [
          {
            id: "Q10_13",
            type: "text",
            maxPoints: 2.0,
            text: "Question 1: Online classes / help / us / learn / during / school / closure /.//",
            modelAnswer: "Online classes helped us learn during the school closure.",
            rubric: "Viết đúng câu: 'Online classes helped us learn during the school closure.' (2.0 điểm)."
          },
          {
            id: "Q10_14",
            type: "text",
            maxPoints: 2.0,
            text: "Question 2: My school / install / interactive smartboards / all classrooms / next term /.//",
            modelAnswer: "My school will install interactive smartboards in all classrooms next term.",
            rubric: "Viết đúng câu thì tương lai: 'My school will install interactive smartboards in all classrooms next term.' (2.0 điểm)."
          },
          {
            id: "Q10_15",
            type: "text",
            maxPoints: 2.0,
            text: "Question 3: Students / must / limit / screen time / protect / their eyes /.//",
            modelAnswer: "Students must limit their screen time to protect their eyes.",
            rubric: "Viết đúng câu: 'Students must limit their screen time to protect their eyes.' (2.0 điểm)."
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.ENGLISH_EXAMS = ENGLISH_EXAMS;
}
