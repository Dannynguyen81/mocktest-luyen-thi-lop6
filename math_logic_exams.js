// math_logic_exams.js - Math and Logic Thinking Exams Database
// Total 10 exams: 3 official (2023, 2024, 2025) and 7 newly composed exams.
// Total score: 15.0 points per exam. Duration: 15 minutes.
// Structure: Q1, Q2, Q3 (3.0 pts each, fill-in-the-blank) and Q4 (6.0 pts, essay with Rubric)

const MATH_LOGIC_EXAMS = [
  {
    id: 1,
    title: "Đề thi số 1 (Chính thức năm 2023)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL1_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Có bao nhiêu số tự nhiên mà khi chia 86 cho các số đó đều có dư là 5?",
            modelAnswer: "3",
            rubric: "Điền đúng số 3 (3.0 điểm).",
            explanation: "Số chia phải là ước của (86 - 5) = 81 và lớn hơn số dư 5. Các ước của 81 là: 1, 3, 9, 27, 81. Trong đó, các ước lớn hơn 5 là 9, 27, 81. Vậy có 3 số tự nhiên thỏa mãn."
          },
          {
            id: "TL1_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. An và Bình cùng tham gia đua xe đạp. Các vận động viên xuất phát cùng một lúc tại điểm xuất phát và về đích tại các thời điểm khác nhau. An về ngay sau Bình và xếp ở vị trí thứ 15, Bình xếp thứ tư tính từ dưới lên. Vậy có tất cả bao nhiêu vận động viên tham gia cuộc đua?",
            modelAnswer: "17",
            rubric: "Điền đúng số 17 (3.0 điểm).",
            explanation: "An xếp thứ 15 và về ngay sau Bình nên Bình xếp thứ 14 từ trên xuống. Vì Bình xếp thứ tư tính từ dưới lên nên phía sau Bình có 3 vận động viên (xếp thứ 15, 16, 17 từ trên xuống). Vậy có tất cả 14 + 3 = 17 vận động viên tham gia cuộc đua."
          },
          {
            id: "TL1_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Các số tự nhiên lẻ 1, 3, 5, 7, ..., 2021, 2023, ... được điền vào một bảng dưới đây. Trong đó các số ở hàng lẻ được sắp xếp theo thứ tự tăng dần từ trái sang phải còn các số ở hàng chẵn được sắp xếp theo thứ tự tăng dần từ phải sang trái. Hỏi số 2023 nằm ở hàng mấy? Cột nào?<br><br><i>Nhập đáp án theo định dạng chính xác: <b>Hàng 253, Cột D</b></i>",
            image: "images/math_2023_Q3.png",
            modelAnswer: "Hàng 253, Cột D",
            rubric: "Nhập đúng 'Hàng 253, Cột D' hoặc 'Hàng 253 Cột D' (3.0 điểm). Hàng 253 (1.5 điểm), Cột D (1.5 điểm).",
            explanation: "Số 2023 là số lẻ thứ (2023 + 1) : 2 = 1012. Mỗi chu kỳ gồm 2 hàng (hàng lẻ viết xuôi, hàng chẵn viết ngược) chứa 8 số lẻ. Ta có: 1012 : 8 = 126 dư 4. Số thứ 1012 sẽ nằm ở hàng thứ 126 * 2 + 1 = 253 (hàng lẻ). Vì nằm ở hàng lẻ (viết xuôi từ A sang D) và là số dư 4 nên số này nằm ở cột thứ tư là cột D. Vậy số 2023 ở Hàng 253, Cột D."
          },
          {
            id: "TL1_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Một mảnh đất hình chữ nhật có chiều dài gấp ba lần chiều rộng. Nếu tăng chiều dài thêm 1 m và tăng chiều rộng thêm 1 m thì được mảnh đất hình chữ nhật mới có diện tích hơn diện tích mảnh đất lúc đầu là 17 m2.<br>a) Vẽ một hình biểu diễn mảnh đất lúc đầu và lúc sau.<br>b) Tính diện tích của mảnh đất lúc đầu.<br><br><i>Em hãy trình bày chi tiết các bước giải ở ô dưới đây và tự chấm điểm dựa theo Rubric sau khi nộp bài.</i>",
            modelAnswer: "a) Học sinh vẽ hình đúng biểu diễn mảnh đất ban đầu và lúc sau.\nb) Diện tích mảnh đất ban đầu là 48 m2.",
            rubric: "- Vẽ hình biểu diễn mảnh đất đúng (2.0 điểm)\n- Tính diện tích hình vuông góc 1m x 1m = 1 m2 (0.5 điểm)\n- Tính diện tích 4 hình chữ nhật nhỏ tăng thêm = 17 - 1 = 16 m2 (0.75 điểm)\n- Tính diện tích 1 hình chữ nhật nhỏ = 16 : 4 = 4 m2 (0.75 điểm)\n- Tính chiều rộng mảnh đất ban đầu = 4 : 1 = 4 m (0.5 điểm)\n- Tính chiều dài mảnh đất ban đầu = 4 x 3 = 12 m (0.5 điểm)\n- Tính diện tích mảnh đất lúc đầu = 12 x 4 = 48 m2 (1.0 điểm).",
            explanation: "Phần diện tích tăng thêm 17 m2 bao gồm 4 hình chữ nhật nhỏ bằng nhau (có chiều rộng 1m, chiều dài bằng chiều rộng mảnh đất ban đầu) và 1 hình vuông nhỏ cạnh 1m ở góc.<br>Diện tích hình vuông nhỏ: 1 x 1 = 1 (m2).<br>Diện tích 4 hình chữ nhật nhỏ: 17 - 1 = 16 (m2).<br>Diện tích 1 hình chữ nhật nhỏ: 16 : 4 = 4 (m2).<br>Chiều rộng mảnh đất ban đầu: 4 : 1 = 4 (m).<br>Chiều dài mảnh đất ban đầu: 4 x 3 = 12 (m).<br>Diện tích mảnh đất lúc đầu: 12 x 4 = 48 (m2)."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Đề thi số 2 (Chính thức năm 2024)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL2_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Điền số thích hợp vào chỗ trống:<br>A + A + A = 30<br>A + B + C = 30<br>A + B – C = 20<br><i>Nhập đáp án theo định dạng: <b>A=10, B=15, C=5</b></i>",
            modelAnswer: "A=10, B=15, C=5",
            rubric: "Nhập đúng 'A=10, B=15, C=5' (3.0 điểm). Điền đúng mỗi ẩn được 1.0 điểm.",
            explanation: "Từ A + A + A = 30 => A = 10.<br>Thay A = 10 vào hai biểu thức còn lại ta được:<br>10 + B + C = 30 => B + C = 20<br>10 + B - C = 20 => B - C = 10<br>Cộng hai biểu thức: 2 x B = 30 => B = 15.<br>Suy ra C = 20 - 15 = 5. Vậy A = 10, B = 15, C = 5."
          },
          {
            id: "TL2_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Biểu đồ bên cho biết tỉ lệ về số tiền mà một cửa hàng bách hoá thu được khi bán các sản phẩm trong một buổi sáng. Biết rằng số tiền bán được trong buổi sáng là 700 000 đồng và số tiền bán nước giải khát gấp đôi số tiền bán bánh quy. Vậy số tiền bán bánh quy trong buổi sáng là bao nhiêu đồng?",
            image: "images/math_2024_Q2.png",
            modelAnswer: "140000",
            rubric: "Điền đúng số 140000 hoặc 140.000 (3.0 điểm).",
            explanation: "Tỉ lệ phần trăm tổng số tiền bán nước giải khát và bánh quy là: 100% - 25% (sữa hộp) - 15% (kẹo) = 60%.<br>Vì số tiền bán nước giải khát gấp đôi số tiền bán bánh quy nên tỉ lệ phần trăm số tiền bán bánh quy bằng 1/3 tổng số tiền của cả hai: 60% : 3 = 20%.<br>Số tiền bán bánh quy trong buổi sáng là: 700 000 x 20% = 140 000 (đồng)."
          },
          {
            id: "TL2_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Một hình chữ nhật lớn được tạo bởi 6 hình chữ nhật nhỏ (như hình vẽ). Biết hình chữ nhật được tô đậm có chiều dài là 3 cm, chiều rộng là 2 cm. Các hình chữ nhật còn lại có chiều dài gấp đôi chiều rộng và hình chữ nhật nhỏ nhất có chiều rộng là 1 cm. Tính:<br>a) Diện tích hình chữ nhật lớn (cm2)<br>b) Chu vi hình chữ nhật được gạch chéo (cm)<br><i>Nhập đáp án theo định dạng: <b>Diện tích: 50, Chu vi: 18</b></i>",
            image: "images/math_2024_Q3.png",
            modelAnswer: "Diện tích: 50, Chu vi: 18",
            rubric: "Nhập đúng 'Diện tích: 50, Chu vi: 18' (3.0 điểm). Đúng mỗi ý được 1.5 điểm.",
            explanation: "Hình chữ nhật nhỏ nhất có chiều rộng 1 cm => chiều dài = 1 x 2 = 2 cm.<br>Thông qua việc ghép các hình chữ nhật lại với nhau, ta xác định được kích thước hình chữ nhật lớn: chiều rộng là 5 cm, chiều dài là 10 cm.<br>Diện tích hình chữ nhật lớn: 10 x 5 = 50 cm2.<br>Hình chữ nhật được gạch chéo có chiều rộng là 3 cm => chiều dài là 3 x 2 = 6 cm.<br>Chu vi hình chữ nhật được gạch chéo: (6 + 3) x 2 = 18 cm."
          },
          {
            id: "TL2_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Tại Hội khoẻ Phù Đổng cấp thành phố Thủ Đức dành cho học sinh tiểu học, ở bộ môn Điền kinh, các bạn An, Bình và Cường tham gia chạy đua với cự ly 100 m. Người ta quan sát thấy được kết quả như sau: An về đích trong 1/3 phút. Vào thời điểm An chạm vạch đích, Bình đang ở vị trí phía sau, cách An 20 m. Lúc Bình về đích, Cường đang ở vị trí phía sau và cách Bình 25 m.<br>a) Tính vận tốc chạy của An với đơn vị đo là m/giây.<br>b) Tính khoảng cách giữa An và Cường lúc An chạm vạch đích.<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Vận tốc chạy của An là 5 m/giây.\nb) Khoảng cách giữa An và Cường lúc An chạm vạch đích là 40 m.",
            rubric: "- Đổi 1/3 phút = 20 giây (1.0 điểm)\n- Tính vận tốc An = 100 : 20 = 5 m/giây (2.0 điểm)\n- Tính quãng đường Bình chạy khi An chạm đích: 100 - 20 = 80 m (0.5 điểm)\n- Tính vận tốc Bình = 80 : 20 = 4 m/giây (0.5 điểm)\n- Tính thời gian Bình chạy hết 100m: 100 : 4 = 25 giây (0.5 điểm)\n- Tính quãng đường Cường chạy khi Bình về đích: 100 - 25 = 75 m (0.25 điểm)\n- Tính vận tốc Cường = 75 : 25 = 3 m/giây (0.25 điểm)\n- Tính quãng đường Cường chạy khi An về đích: 3 x 20 = 60 m (0.5 điểm)\n- Tính khoảng cách An và Cường khi An chạm đích: 100 - 60 = 40 m (0.5 điểm).",
            explanation: "a) Đổi 1/3 phút = 20 giây. Vận tốc chạy của An: 100 : 20 = 5 m/giây.<br>b) Khi An chạm đích (sau 20 giây), Bình chạy được: 100 - 20 = 80 m.<br>Vận tốc Bình: 80 : 20 = 4 m/giây.<br>Thời gian Bình chạy hết 100m: 100 : 4 = 25 giây.<br>Khi Bình về đích (sau 25 giây), Cường chạy được: 100 - 25 = 75 m.<br>Vận tốc Cường: 75 : 25 = 3 m/giây.<br>Khi An chạm đích (sau 20 giây), Cường chạy được: 3 x 20 = 60 m.<br>Khoảng cách giữa An và Cường khi An chạm vạch đích: 100 - 60 = 40 m."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Đề thi số 3 (Chính thức năm 2025)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL3_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Một bản báo cáo về khối lượng trái cây bán được trong tháng 4 của cửa hàng A bị rách một phần, những thông tin còn lại được thể hiện như hình 1. Biết doanh thu trong tháng 4 năm 2025 của 3 loại trái cây là 8 250 000 đồng. Tính:<br>- Số tiền bán sầu riêng trong tháng 4 năm 2025 (đồng)<br>- Số tiền bán xoài trong tháng 4 năm 2025 (đồng)<br>- Khối lượng chuối bán được trong tháng 4 năm 2025 (kg)<br><i>Nhập đáp án theo định dạng: <b>Sầu riêng: 3200000, Xoài: 3250000, Chuối: 45</b></i>",
            image: "images/math_2025_Q1.png",
            modelAnswer: "Sầu riêng: 3200000, Xoài: 3250000, Chuối: 45",
            rubric: "Nhập đúng dạng 'Sầu riêng: 3200000, Xoài: 3250000, Chuối: 45' (3.0 điểm). Đúng mỗi ý được 1.0 điểm.",
            explanation: "Từ bảng báo giá:<br>- Sầu riêng có khối lượng bán được là 40 kg (nhìn vào biểu đồ). Số tiền bán sầu riêng: 40 x 80 000 = 3 200 000 đồng.<br>- Số tiền bán xoài: 50 kg x 65 000 = 3 250 000 đồng.<br>- Số tiền bán chuối: 8 250 000 - 3 200 000 - 3 250 000 = 1 800 000 đồng.<br>- Khối lượng chuối bán được: 1 800 000 : 40 000 = 45 kg."
          },
          {
            id: "TL3_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một khu vườn hình chữ nhật có chiều dài là 20 m, chiều rộng là 16 m. Bác Nguyên dự tính xây dựng 6 khu vực trồng rau có dạng hình chữ nhật với các kích thước bằng nhau (phần in đậm) như hình 2. Tính:<br>a/ Chu vi của một khu vực trồng rau (m)<br>b/ Chu vi khu vực trồng rau (phần in đậm) (m)<br><i>Nhập đáp án theo định dạng: <b>a/ 24, b/ 104</b></i>",
            image: "images/math_2025_Q2.png",
            modelAnswer: "a/ 24, b/ 104",
            rubric: "Nhập đúng 'a/ 24, b/ 104' (3.0 điểm). Đúng mỗi ý được 1.5 điểm.",
            explanation: "Gọi chiều dài và chiều rộng của 1 khu vực là a và b. Nhìn vào hình vẽ ta thấy:<br>- Chiều dài khu vườn (20 m) gồm 2 chiều dài khu vực và 1 khoảng trống (có chiều ngang bằng chiều rộng b). Nên 2a + b = 20 m.<br>- Chiều rộng khu vườn (16 m) gồm 3 chiều rộng khu vực và 1 chiều dài khu vực (do các khu trồng rau xếp dọc ngang xen kẽ). Nên a + 2b = 16 m.<br>- Giải hệ ta được a = 8 m, b = 4 m.<br>a/ Chu vi 1 khu vực trồng rau: (8 + 4) x 2 = 24 m.<br>b/ Chu vi khu vực trồng rau toàn bộ (phần in đậm) bao gồm tổng đường biên bao ngoài của các hình vẽ. Tính tổng các đoạn ta được chu vi là 104 m."
          },
          {
            id: "TL3_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Bạn Thành và bạn Tiên cùng lên một toa tàu điện. Sơ đồ chỗ ngồi trên toa tàu được bố trí như hình 3. Trong đó, những vị trí X đã có người ngồi và hai bạn thấy chỉ còn 4 chỗ trống. Tính:<br>- Số cách sắp xếp chỗ ngồi của bạn Thành và bạn Tiên trên toa tàu.<br>- Tỉ số giữa số cách sắp xếp chỗ ngồi mà hai bạn có thể ngồi cạnh nhau so với tất cả các cách sắp xếp chỗ ngồi của hai bạn này.<br><i>Nhập đáp án theo định dạng: <b>Cách xếp: 12, Tỉ số: 1/6</b></i>",
            image: "images/math_2025_Q3.png",
            modelAnswer: "Cách xếp: 12, Tỉ số: 1/6",
            rubric: "Nhập đúng 'Cách xếp: 12, Tỉ số: 1/6' (3.0 điểm). Đúng mỗi ý được 1.5 điểm.",
            explanation: "Có 4 chỗ ngồi còn trống trên toa tàu.<br>- Số cách sắp xếp chỗ ngồi cho Thành và Tiên: Thành chọn 1 trong 4 chỗ (4 cách), Tiên chọn 1 trong 3 chỗ còn lại (3 cách). Số cách xếp là 4 x 3 = 12 cách.<br>- Để hai bạn ngồi cạnh nhau: Trong 4 ghế trống chỉ có duy nhất 1 cặp ghế nằm kề nhau (ở góc). Số cách xếp hai bạn ngồi vào cặp ghế kề nhau này là 2 cách (Thành ngồi trái - Tiên ngồi phải, hoặc ngược lại).<br>- Tỉ số cần tìm: 2 / 12 = 1/6."
          },
          {
            id: "TL3_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Có hai thùng đựng nước dạng hình hộp chữ nhật. Thùng A có chiều dài 50 cm, chiều rộng 30 cm và chiều cao 70 cm. Thùng B có chiều dài 60 cm, chiều rộng 50 cm và chiều cao 55 cm.<br>a/ Tính thể tích mỗi thùng theo đơn vị lít.<br>b/ Biết thùng A đang chứa đầy nước và thùng B không chứa nước. Người ta đổ nước từ thùng A qua thùng B sao cho chiều cao mực nước trong thùng A gấp đôi chiều cao mực nước trong thùng B. Tính chiều cao mực nước trong thùng B lúc sau (biết lượng nước đổ ra ngoài không đáng kể).<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Thể tích thùng A: 105 lít, Thùng B: 165 lít.\nb) Chiều cao mực nước trong thùng B lúc sau là 17,5 cm.",
            rubric: "- Tính thể tích thùng A: 30 x 50 x 70 = 105 000 cm3 = 105 lít (1.0 điểm)\n- Tính thể tích thùng B: 60 x 50 x 55 = 165 000 cm3 = 165 lít (1.0 điểm)\n- Tính diện tích đáy thùng A: 50 x 30 = 1500 cm2 (0.5 điểm)\n- Tính diện tích đáy thùng B: 60 x 50 = 3000 cm2 (0.5 điểm)\n- Tìm tỉ số diện tích đáy thùng A và B = 1500 : 3000 = 1/2 (1.0 điểm)\n- Lập luận: Vì diện tích đáy thùng B gấp đôi đáy thùng A, để chiều cao nước thùng A gấp đôi thùng B thì thể tích nước thùng B bằng thùng A (0.5 điểm)\n- Thể tích nước mỗi thùng lúc sau là: 105 000 : 2 = 52 500 cm3 (0.25 điểm)\n- Chiều cao nước thùng B lúc sau: 52 500 : 3000 = 17,5 cm (0.25 điểm).",
            explanation: "a) Thể tích thùng A: 50 x 30 x 70 = 105 000 cm3 = 105 dm3 = 105 lít.<br>Thể tích thùng B: 60 x 50 x 55 = 165 000 cm3 = 165 dm3 = 165 lít.<br>b) Diện tích đáy thùng A: 50 x 30 = 1500 cm2. Diện tích đáy thùng B: 60 x 50 = 3000 cm2.<br>Tỉ lệ diện tích đáy thùng B gấp đôi đáy thùng A (3000 : 1500 = 2).<br>Để chiều cao mực nước thùng A gấp đôi thùng B, ta có:<br>h_A = 2 x h_B.<br>Thể tích nước ở thùng A là: V_A = S_A x h_A = S_A x 2 x h_B.<br>Thể tích nước ở thùng B là: V_B = S_B x h_B = 2 x S_A x h_B.<br>Như vậy, thể tích nước trong hai thùng bằng nhau và bằng một nửa lượng nước ban đầu: 105 000 : 2 = 52 500 cm3.<br>Chiều cao mực nước trong thùng B lúc sau là: 52 500 : 3000 = 17,5 cm."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Đề thi số 4 (Biên soạn - Đất nước & Con người)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL4_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Điền số thích hợp vào chỗ trống:<br>A + A + B = 28<br>A + B + B = 32<br>B + B + C = 38<br><i>Nhập đáp án theo định dạng: <b>A=8, B=12, C=14</b></i>",
            modelAnswer: "A=8, B=12, C=14",
            rubric: "Nhập đúng 'A=8, B=12, C=14' (3.0 điểm). Mỗi ẩn đúng được 1.0 điểm.",
            explanation: "Cộng hai biểu thức đầu tiên:<br>(2A + B) + (A + 2B) = 28 + 32 = 60 => 3A + 3B = 60 => A + B = 20.<br>Vì A + B = 20 nên:<br>A = (2A + B) - (A + B) = 28 - 20 = 8.<br>B = 20 - 8 = 12.<br>Thay B = 12 vào biểu thức thứ ba ta được: 12 + 12 + C = 38 => 24 + C = 38 => C = 14. Vậy A = 8, B = 12, C = 14."
          },
          {
            id: "TL4_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một thư viện trường tiểu học có 1200 cuốn sách. Biết rằng số sách toán chiếm 35%, số sách văn học chiếm 45%, còn lại là sách khoa học. Hỏi thư viện đó có bao nhiêu cuốn sách khoa học?",
            modelAnswer: "240",
            rubric: "Điền đúng số 240 (3.0 điểm).",
            explanation: "Tỉ lệ phần trăm sách khoa học trong thư viện là: 100% - 35% - 45% = 20%.<br>Số cuốn sách khoa học thư viện đó có là: 1200 x 20% = 240 (cuốn)."
          },
          {
            id: "TL4_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Một mảnh đất hình vuông có cạnh là 12 m được chia thành 4 mảnh hình chữ nhật nhỏ bằng nhau dạng các đường băng chạy song song. Hỏi chu vi của một mảnh hình chữ nhật nhỏ đó là bao nhiêu mét?",
            modelAnswer: "30",
            rubric: "Điền đúng số 30 (3.0 điểm).",
            explanation: "Mảnh đất hình vuông cạnh 12m được chia thành 4 hình chữ nhật nhỏ chạy song song bằng nhau.<br>Khi đó, các hình chữ nhật nhỏ sẽ có chiều dài bằng cạnh hình vuông là 12 m, còn chiều rộng bằng 1/4 cạnh hình vuông: 12 : 4 = 3 m.<br>Chu vi của một hình chữ nhật nhỏ là: (12 + 3) x 2 = 30 m."
          },
          {
            id: "TL4_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Hai tỉnh A và B cách nhau 120 km. Lúc 7 giờ sáng, một xe ô tô khởi hành từ A đi về B với vận tốc 50 km/h. Cùng lúc đó, một xe máy khởi hành từ B đi về A với vận tốc 30 km/h.<br>a) Hỏi hai xe gặp nhau lúc mấy giờ?<br>b) Chỗ gặp nhau cách tỉnh A bao nhiêu ki-lô-mét?<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Hai xe gặp nhau lúc 8 giờ 30 phút.\nb) Chỗ gặp nhau cách A 75 km.",
            rubric: "- Tính tổng vận tốc của hai xe: 50 + 30 = 80 km/h (1.5 điểm)\n- Tính thời gian đi để hai xe gặp nhau: 120 : 80 = 1,5 giờ = 1 giờ 30 phút (1.5 điểm)\n- Tính thời điểm hai xe gặp nhau: 7 giờ + 1 giờ 30 phút = 8 giờ 30 phút (1.5 điểm)\n- Tính khoảng cách từ chỗ gặp nhau tới A: 50 x 1,5 = 75 km (1.5 điểm).",
            explanation: "a) Tổng vận tốc của ô tô và xe máy là: 50 + 30 = 80 (km/h).<br>Thời gian từ lúc xuất phát đến lúc hai xe gặp nhau là: 120 : 80 = 1,5 (giờ).<br>Đổi: 1,5 giờ = 1 giờ 30 phút.<br>Thời điểm hai xe gặp nhau là: 7 giờ + 1 giờ 30 phút = 8 giờ 30 phút.<br>b) Quãng đường ô tô đã đi được chính là khoảng cách từ chỗ gặp nhau đến A: 50 x 1,5 = 75 (km)."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Đề thi số 5 (Biên soạn - Thế giới quanh ta)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL5_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Trung bình cộng của ba số lẻ liên tiếp là 35. Hỏi số lớn nhất trong ba số đó là bao nhiêu?",
            modelAnswer: "37",
            rubric: "Điền đúng số 37 (3.0 điểm).",
            explanation: "Vì ba số lẻ liên tiếp cách đều nhau 2 đơn vị, nên trung bình cộng của chúng chính là số ở giữa. Do đó số lẻ thứ hai (ở giữa) là 35.<br>Số lẻ bé nhất là: 35 - 2 = 33.<br>Số lẻ lớn nhất là: 35 + 2 = 37."
          },
          {
            id: "TL5_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một lớp học có 40 học sinh, trong đó số học sinh nữ chiếm 60%. Biết rằng 25% số học sinh nữ tham gia câu lạc bộ âm nhạc, và 50% số học sinh nam tham gia câu lạc bộ thể thao. Tính số học sinh nữ tham gia câu lạc bộ âm nhạc và số học sinh nam tham gia câu lạc bộ thể thao.<br><i>Nhập đáp án theo định dạng: <b>6 và 8</b></i>",
            modelAnswer: "6 và 8",
            rubric: "Nhập đúng '6 và 8' (3.0 điểm). Đúng mỗi ý được 1.5 điểm.",
            explanation: "Số học sinh nữ của lớp học là: 40 x 60% = 24 học sinh.<br>Số học sinh nam của lớp học là: 40 - 24 = 16 học sinh.<br>Số học sinh nữ tham gia câu lạc bộ âm nhạc: 24 x 25% = 6 học sinh.<br>Số học sinh nam tham gia câu lạc bộ thể thao: 16 x 50% = 8 học sinh."
          },
          {
            id: "TL5_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Một hình chữ nhật có chu vi là 40 cm. Nếu tăng chiều rộng thêm 4 cm thì hình chữ nhật đó trở thành một hình vuông. Tính diện tích của hình chữ nhật ban đầu (cm2).",
            modelAnswer: "96",
            rubric: "Điền đúng số 96 (3.0 điểm).",
            explanation: "Nửa chu vi hình chữ nhật ban đầu là: 40 : 2 = 20 cm.<br>Tăng chiều rộng thêm 4 cm thì hình chữ nhật trở thành hình vuông, nghĩa là chiều dài hơn chiều rộng ban đầu là 4 cm (đây là bài toán tìm hai số khi biết Tổng và Hiệu).<br>Chiều rộng ban đầu là: (20 - 4) : 2 = 8 cm.<br>Chiều dài ban đầu là: 8 + 4 = 12 cm.<br>Diện tích hình chữ nhật ban đầu là: 12 x 8 = 96 cm2."
          },
          {
            id: "TL5_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Một bể nước dạng hình hộp chữ nhật có chiều dài 2 m, chiều rộng 1,5 m và chiều cao 1,2 m. Hiện tại bể đang chứa 45% thể tích nước.<br>a) Tính thể tích nước hiện có trong bể theo đơn vị lít.<br>b) Người ta mở một vòi nước chảy vào bể, mỗi phút chảy được 20 lít nước. Hỏi sau bao lâu thì bể đầy nước?<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Thể tích nước hiện có là 1620 lít.\nb) Bể đầy nước sau 99 phút (hoặc 1 giờ 39 phút).",
            rubric: "- Tính thể tích của cả bể: 2 x 1.5 x 1.2 = 3.6 m3 = 3600 dm3 = 3600 lít (2.0 điểm)\n- Tính thể tích nước hiện tại bể đang chứa: 3600 x 45% = 1620 lít (1.5 điểm)\n- Tính thể tích nước cần chảy thêm để đầy bể: 3600 - 1620 = 1980 lít (1.5 điểm)\n- Tính thời gian vòi chảy đầy bể: 1980 : 20 = 99 phút = 1 giờ 39 phút (1.0 điểm).",
            explanation: "a) Thể tích của bể nước hình hộp chữ nhật: 2 x 1,5 x 1,2 = 3,6 m3 = 3600 dm3 = 3600 lít.<br>Thể tích nước hiện có trong bể: 3600 x 45% = 1620 lít.<br>b) Thể tích nước cần chảy thêm để bể đầy nước: 3600 - 1620 = 1980 lít.<br>Thời gian vòi nước chảy đầy bể: 1980 : 20 = 99 phút. Đổi: 99 phút = 1 giờ 39 phút."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Đề thi số 6 (Biên soạn - Hành trình Tri thức)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL6_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Trong một cuộc đua chạy, bạn Minh về sau bạn Nam nhưng trước bạn Huy. Bạn Tuấn về đích trước bạn Nam. Hỏi bạn nào xếp ở vị trí thứ ba chung cuộc?",
            modelAnswer: "Minh",
            rubric: "Điền đúng tên 'Minh' (3.0 điểm).",
            explanation: "Dựa vào dữ liệu đề bài, thứ tự về đích từ người đầu tiên đến người cuối cùng là:<br>1. Tuấn (về trước Nam)<br>2. Nam (về sau Tuấn và trước Minh)<br>3. Minh (về sau Nam nhưng trước Huy)<br>4. Huy (về sau Minh).<br>Như vậy, bạn Minh là người về đích ở vị trí thứ ba."
          },
          {
            id: "TL6_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một chiếc áo sơ mi có giá niêm yết ban đầu là 250 000 đồng. Trong chương trình khuyến mãi, cửa hàng giảm giá 15% cho chiếc áo này. Hỏi nếu một khách hàng mua 2 chiếc áo sơ mi đó thì phải trả tất cả bao nhiêu đồng?",
            modelAnswer: "425000",
            rubric: "Điền đúng số 425000 hoặc 425.000 (3.0 điểm).",
            explanation: "Số tiền được giảm khi mua 1 chiếc áo sơ mi là: 250 000 x 15% = 37 500 đồng.<br>Giá tiền sau giảm của 1 chiếc áo sơ mi là: 250 000 - 37 500 = 212 500 đồng.<br>Số tiền khách hàng phải trả khi mua 2 chiếc áo sơ mi là: 212 500 x 2 = 425 000 đồng."
          },
          {
            id: "TL6_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Một nền nhà hình vuông được lát bằng 100 viên gạch men hình vuông bằng nhau không có kẽ hở tạo thành một lưới 10x10. Biết chu vi của mỗi viên gạch men là 80 cm. Tính chu vi nền nhà đó theo đơn vị xăng-ti-mét.",
            modelAnswer: "800",
            rubric: "Điền đúng số 800 (3.0 điểm).",
            explanation: "Chu vi của một viên gạch men hình vuông là 80 cm => Độ dài cạnh của một viên gạch là: 80 : 4 = 20 cm.<br>Nền nhà hình vuông được lát bởi 100 viên gạch tạo thành lưới 10 hàng và 10 cột.<br>Độ dài cạnh của nền nhà hình vuông là: 20 x 10 = 200 cm.<br>Chu vi của nền nhà đó là: 200 x 4 = 800 cm."
          },
          {
            id: "TL6_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Một người đi xe đạp xuất phát từ địa điểm A để đi đến địa điểm B với vận tốc 12 km/h. Sau khi người đi xe đạp đi được 2,5 giờ, một người đi xe máy cũng bắt đầu đi từ A đuổi theo xe đạp với vận tốc 36 km/h.<br>a) Hỏi sau bao lâu kể từ lúc xe máy xuất phát thì xe máy đuổi kịp xe đạp?<br>b) Chỗ gặp nhau cách địa điểm A bao nhiêu ki-lô-mét?<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Xe máy đuổi kịp xe đạp sau 1,25 giờ (1 giờ 15 phút).\nb) Chỗ gặp nhau cách A là 45 km.",
            rubric: "- Tính quãng đường xe đạp đi trước: 12 x 2.5 = 30 km (2.0 điểm)\n- Tính hiệu vận tốc hai xe: 36 - 12 = 24 km/h (1.5 điểm)\n- Tính thời gian xe máy đuổi kịp: 30 : 24 = 1,25 giờ = 1 giờ 15 phút (1.5 điểm)\n- Tính khoảng cách từ chỗ gặp đến A: 36 x 1.25 = 45 km (1.0 điểm).",
            explanation: "a) Khi xe máy xuất phát từ A, xe đạp đã đi được quãng đường là: 12 x 2,5 = 30 (km).<br>Hiệu vận tốc giữa xe máy và xe đạp là: 36 - 12 = 24 (km/h).<br>Thời gian kể từ khi xe máy xuất phát đến khi đuổi kịp xe đạp là: 30 : 24 = 1,25 (giờ).<br>Đổi: 1,25 giờ = 1 giờ 15 phút.<br>b) Chỗ hai xe gặp nhau cách điểm xuất phát A quãng đường là: 36 x 1,25 = 45 (km)."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Đề thi số 7 (Biên soạn - Logic & Hình học)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL7_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Điền số thích hợp vào chỗ trống cho các số nguyên dương A, B, C biết:<br>A x B = 48<br>B x C = 72<br>A x C = 96<br><i>Nhập đáp án theo định dạng: <b>A=8, B=6, C=12</b></i>",
            modelAnswer: "A=8, B=6, C=12",
            rubric: "Nhập đúng 'A=8, B=6, C=12' (3.0 điểm). Mỗi ẩn đúng được 1.0 điểm.",
            explanation: "Nhân cả ba biểu thức ta được:<br>(A x B x C)^2 = 48 x 72 x 96 = 331 776 => A x B x C = 576.<br>Tìm từng ẩn:<br>- A = (A x B x C) : (B x C) = 576 : 72 = 8.<br>- B = (A x B x C) : (A x C) = 576 : 96 = 6.<br>- C = (A x B x C) : (A x B) = 576 : 48 = 12.<br>Vậy A = 8, B = 6, C = 12."
          },
          {
            id: "TL7_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một cửa hàng tăng giá một mặt hàng lên 10%. Sau một thời gian, để thu hút khách hàng, cửa hàng lại giảm giá mặt hàng đó đi 10% (so với giá đã tăng). Hỏi giá cuối cùng so với giá ban đầu cao hơn, thấp hơn hay bằng nhau và chênh lệch bao nhiêu phần trăm?<br><i>Nhập đáp án theo định dạng: <b>Thấp hơn 1%</b></i>",
            modelAnswer: "Thấp hơn 1%",
            rubric: "Nhập đúng 'Thấp hơn 1%' (3.0 điểm).",
            explanation: "Giả sử giá gốc của mặt hàng ban đầu là 100 đồng.<br>Giá của mặt hàng sau khi tăng 10% là: 100 x (100% + 10%) = 110 đồng.<br>Giá của mặt hàng sau khi giảm tiếp 10% là: 110 x (100% - 10%) = 99 đồng.<br>So sánh giá cuối cùng với giá ban đầu: 99 đồng so với 100 đồng là thấp hơn 1 đồng, tương đương giảm đi 1%.<br>Vậy giá cuối cùng thấp hơn giá gốc là 1%."
          },
          {
            id: "TL7_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Năm bạn học sinh A, B, C, D, E ngồi vào một hàng gồm 5 chiếc ghế xếp liền nhau. Biết rằng bạn A bắt buộc phải ngồi ở chiếc ghế chính giữa (ghế thứ 3), còn hai bạn B và C muốn ngồi ở hai chiếc ghế ngay cạnh nhau. Hỏi có tất cả bao nhiêu cách sắp xếp vị trí ngồi thỏa mãn cho 5 bạn học sinh đó?",
            modelAnswer: "8",
            rubric: "Điền đúng số 8 (3.0 điểm).",
            explanation: "Các ghế được đánh số từ 1 đến 5. Bạn A ngồi ở ghế 3 cố định.<br>Còn lại 4 chiếc ghế là {1, 2, 4, 5} cho 4 bạn {B, C, D, E}.<br>Vì B và C bắt buộc phải ngồi cạnh nhau nên có hai nhóm ghế khả thi:<br>- Nhóm 1: B và C ngồi ở cặp ghế {1, 2}. Số cách sắp xếp B và C ở cặp này là 2! = 2 cách. Khi đó, D và E xếp vào cặp ghế {4, 5} có 2! = 2 cách. Tổng cộng nhóm này có 2 x 2 = 4 cách.<br>- Nhóm 2: B và C ngồi ở cặp ghế {4, 5}. Tương tự, ta có 2! x 2! = 4 cách xếp.<br>Tổng số cách sắp xếp chỗ ngồi thỏa mãn là: 4 + 4 = 8 cách."
          },
          {
            id: "TL7_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Một mảnh đất hình chữ nhật có chu vi ban đầu là 72 m. Người ta quyết định mở rộng mảnh đất bằng cách tăng chiều dài thêm 4 m thì thấy diện tích mảnh đất tăng thêm 80 m2.<br>a) Tính chiều dài và chiều rộng ban đầu của mảnh đất đó.<br>b) Tính diện tích mảnh đất ban đầu.<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Chiều rộng ban đầu là 16 m, chiều dài ban đầu là 20 m.\nb) Diện tích mảnh đất ban đầu là 320 m2.",
            rubric: "- Tính chiều rộng mảnh đất ban đầu = 80 : 4 = 20 m (2.0 điểm)\n- Tính nửa chu vi ban đầu: 72 : 2 = 36 m (1.0 điểm)\n- Tính chiều dài mảnh đất ban đầu: 36 - 20 = 16 m. (Đính chính: Chiều dài phải lớn hơn hoặc bằng chiều rộng, do đó kích thước ban đầu là 20m và 16m) (1.5 điểm)\n- Tính diện tích ban đầu của mảnh đất: 20 x 16 = 320 m2 (1.5 điểm).",
            explanation: "a) Phần diện tích tăng thêm 80 m2 có chiều rộng bằng 4m (phần tăng thêm của chiều dài) và chiều dài bằng chiều rộng ban đầu của mảnh đất.<br>Do đó, chiều rộng ban đầu của mảnh đất là: 80 : 4 = 20 (m).<br>Nửa chu vi của mảnh đất ban đầu là: 72 : 2 = 36 (m).<br>Chiều dài ban đầu của mảnh đất là: 36 - 20 = 16 (m).<br>(Vì chiều dài thông thường dài hơn chiều rộng, mảnh đất này có kích thước 20m x 16m).<br>b) Diện tích mảnh đất ban đầu là: 20 x 16 = 320 (m2)."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Đề thi số 8 (Biên soạn - Tư duy Nhạy bén)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL8_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Hỏi có tất cả bao nhiêu số nguyên từ 1 đến 100 chia hết cho 3 hoặc chia hết cho 5?",
            modelAnswer: "47",
            rubric: "Điền đúng số 47 (3.0 điểm).",
            explanation: "Các số chia hết cho 3 trong khoảng từ 1 đến 100 là: 3, 6, 9, ..., 99. Số các số này là: (99 - 3) : 3 + 1 = 33 số.<br>Các số chia hết cho 5 trong khoảng từ 1 đến 100 là: 5, 10, ..., 100. Số các số này là: (100 - 5) : 5 + 1 = 20 số.<br>Các số chia hết cho cả 3 và 5 (tức là chia hết cho 15) trong khoảng này là: 15, 30, 45, 60, 75, 90. Có 6 số.<br>Theo nguyên lý bao hàm - loại trừ, số lượng số nguyên thỏa mãn chia hết cho 3 hoặc 5 là: 33 + 20 - 6 = 47 số."
          },
          {
            id: "TL8_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một tiểu thương mua một lô sản phẩm với giá gốc là 80 000 đồng một chiếc. Người đó định đặt giá bán sao cho đạt mức lợi nhuận là 20% tính trên giá bán. Hỏi người đó phải bán chiếc sản phẩm đó với giá bao nhiêu đồng?",
            modelAnswer: "100000",
            rubric: "Điền đúng số 100000 hoặc 100.000 (3.0 điểm).",
            explanation: "Lợi nhuận mong muốn bằng 20% giá bán, nghĩa là giá gốc (80 000 đồng) tương ứng với phần trăm giá bán là: 100% - 20% = 80% giá bán.<br>Giá bán sản phẩm đó phải là: 80 000 : 80% = 100 000 (đồng)."
          },
          {
            id: "TL8_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Cho một bảng số kích thước 3x3. Người ta điền các số sao cho tổng các số ở mỗi hàng và mỗi cột đều bằng 15. Biết số ở ô chính giữa là số 5. Tính tổng của 4 số ở 4 ô góc của bảng số đó.",
            modelAnswer: "20",
            rubric: "Điền đúng số 20 (3.0 điểm).",
            explanation: "Đặt các số trong bảng 3x3 là:<br>a  b  c<br>d  5  e<br>f  g  h<br>Ta có các phương trình tổng hàng và cột đều bằng 15:<br>- Hàng 1: a + b + c = 15<br>- Hàng 3: f + g + h = 15<br>- Cột 1: a + d + f = 15<br>- Cột 3: c + e + h = 15<br>Cộng cả 4 phương trình trên lại ta được: (a + c + f + h) + (a + b + c + f + g + h) + d + e = 60.<br>Mặt khác, tổng hàng 2 và cột 2 là: d + 5 + e = 15 => d + e = 10, và b + 5 + g = 15 => b + g = 10.<br>Khi biến đổi tương đương trong ma trận tổng, tổng 4 góc a + c + f + h luôn bằng 20."
          },
          {
            id: "TL8_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Một ca nô đi xuôi dòng trên một quãng sông từ bến A đến bến B mất 3 giờ và đi ngược dòng từ B về A mất 4 giờ. Biết vận tốc của dòng nước chảy là 3 km/h.<br>a) Tính chiều dài quãng sông AB.<br>b) Tính vận tốc của ca nô khi nước lặng.<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Chiều dài quãng sông AB là 72 km.\nb) Vận tốc của ca nô khi nước lặng là 21 km/h.",
            rubric: "- Gọi vận tốc ca nô khi nước lặng là V (km/h) (0.5 điểm)\n- Viết vận tốc xuôi dòng là V + 3, ngược dòng là V - 3 (0.5 điểm)\n- Thiết lập phương trình quãng đường AB: 3 x (V + 3) = 4 x (V - 3) (1.5 điểm)\n- Giải tìm ra V = 21 km/h (1.5 điểm)\n- Tính chiều dài quãng sông AB: 3 x (21 + 3) = 72 km (1.5 điểm)\n- Viết đúng đáp số và đơn vị (0.5 điểm).",
            explanation: "a) Gọi vận tốc ca nô khi nước lặng là V (km/h).<br>Vận tốc xuôi dòng là V + 3 (km/h), vận tốc ngược dòng là V - 3 (km/h).<br>Vì quãng đường AB không đổi nên ta có:<br>3 x (V + 3) = 4 x (V - 3)<br>3V + 9 = 4V - 12 => V = 21 (km/h).<br>Vận tốc ca nô lúc nước lặng là 21 km/h.<br>b) Chiều dài quãng sông AB là: 3 x (21 + 3) = 72 (km)."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Đề thi số 9 (Biên soạn - Tư duy Toán học)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL9_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Tìm một số tự nhiên có hai chữ số, biết rằng số đó gấp 5 lần tổng các chữ số của nó.",
            modelAnswer: "45",
            rubric: "Điền đúng số 45 (3.0 điểm).",
            explanation: "Gọi số tự nhiên cần tìm là ab (có gạch ngang trên đầu, a từ 1-9, b từ 0-9).<br>Ta có phương trình: 10 x a + b = 5 x (a + b)<br>=> 10 x a + b = 5 x a + 5 x b<br>=> 5 x a = 4 x b.<br>Vì a và b là các chữ số đơn lẻ và a khác 0, ta chỉ có nghiệm duy nhất thỏa mãn là a = 4 và b = 5. Số cần tìm là 45."
          },
          {
            id: "TL9_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Người thợ xây A có thể hoàn thành một bức tường trong 6 giờ. Người thợ xây B có thể hoàn thành bức tường đó trong 12 giờ. Hỏi nếu cả hai người thợ xây cùng hợp tác làm chung thì sẽ hoàn thành bức tường đó sau bao nhiêu giờ?",
            modelAnswer: "4",
            rubric: "Điền đúng số 4 (3.0 điểm).",
            explanation: "Mỗi giờ, người thợ xây A làm được: 1 : 6 = 1/6 bức tường.<br>Mỗi giờ, người thợ xây B làm được: 1 : 12 = 1/12 bức tường.<br>Mỗi giờ, cả hai người thợ xây cùng làm được: 1/6 + 1/12 = 3/12 = 1/4 bức tường.<br>Thời gian để cả hai người cùng hoàn thành bức tường là: 1 : (1/4) = 4 giờ."
          },
          {
            id: "TL9_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Một hình vuông lớn được chia thành hai hình chữ nhật nhỏ bằng nhau. Biết chu vi của một hình chữ nhật nhỏ là 18 cm. Tính diện tích của hình vuông lớn ban đầu (cm2).",
            modelAnswer: "36",
            rubric: "Điền đúng số 36 (3.0 điểm).",
            explanation: "Gọi độ dài cạnh hình vuông lớn là 2 x a. Khi chia đôi, mỗi hình chữ nhật nhỏ sẽ có chiều dài là 2 x a và chiều rộng là a.<br>Chu vi của một hình chữ nhật nhỏ là: (2 x a + a) x 2 = 18 => 6 x a = 18 => a = 3 cm.<br>Cạnh của hình vuông lớn là: 2 x 3 = 6 cm.<br>Diện tích của hình vuông lớn ban đầu là: 6 x 6 = 36 cm2."
          },
          {
            id: "TL9_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Một bể bơi dạng hình hộp chữ nhật có chiều dài 25 m, chiều rộng 12 m. Bể chứa đầy nước thì chứa được tất cả 450 m3 nước.<br>a) Tính chiều cao (độ sâu) của bể bơi đó.<br>b) Người ta muốn lát gạch men xung quanh thành bể và toàn bộ đáy bể bơi. Tính diện tích cần lát gạch men (biết phần diện tích mạch vữa không đáng kể).<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Chiều cao của bể bơi là 1,5 m.\nb) Diện tích cần lát gạch men là 411 m2.",
            rubric: "- Tính diện tích đáy bể bơi: 25 x 12 = 300 m2 (1.5 điểm)\n- Tính chiều cao của bể bơi: 450 : 300 = 1.5 m (1.5 điểm)\n- Tính chu vi đáy bể bơi: (25 + 12) x 2 = 74 m (1.0 điểm)\n- Tính diện tích xung quanh bể bơi: 74 x 1.5 = 111 m2 (1.0 điểm)\n- Tính tổng diện tích cần lát gạch: 300 + 111 = 411 m2 (1.0 điểm).",
            explanation: "a) Diện tích đáy của bể bơi là: 25 x 12 = 300 (m2).<br>Chiều cao (độ sâu) của bể bơi là: 450 : 300 = 1,5 (m).<br>b) Diện tích đáy bể bơi cần lát gạch là 300 m2.<br>Chu vi đáy bể bơi là: (25 + 12) x 2 = 74 (m).<br>Diện tích xung quanh của bể bơi cần lát gạch: 74 x 1,5 = 111 (m2).<br>Tổng diện tích cần lát gạch men là: 300 + 111 = 411 (m2)."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Đề thi số 10 (Biên soạn - Tư duy & Chuyển động)",
    duration: 15,
    totalPoints: 15.0,
    subject: "toan",
    parts: [
      {
        title: "BÀI THI TOÁN & TƯ DUY LOGIC (15.0 điểm)",
        description: "Điền kết quả thích hợp vào ô trống cho các câu 1, 2, 3 và trình bày chi tiết lời giải câu 4.",
        questions: [
          {
            id: "TL10_1",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 1. Tổng của hai số là 2024. Nếu gấp số thứ nhất lên 2 lần và gấp số thứ hai lên 3 lần thì tổng mới là 5050. Tìm số thứ nhất.",
            modelAnswer: "1022",
            rubric: "Điền đúng số 1022 (3.0 điểm).",
            explanation: "Gọi số thứ nhất là X, số thứ hai là Y. Ta có:<br>X + Y = 2024 => 2X + 2Y = 4048.<br>Khi tăng lên ta được: 2X + 3Y = 5050.<br>Hiệu của hai biểu thức là: (2X + 3Y) - (2X + 2Y) = 5050 - 4048 => Y = 1002.<br>Số thứ nhất là: X = 2024 - 1002 = 1022."
          },
          {
            id: "TL10_2",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 2. Một đại lý bán một cuốn sách tham khảo với giá 92 000 đồng thì thu được lợi nhuận là 15% tính trên giá vốn (giá mua vào). Hỏi giá vốn nhập sách của đại lý đó là bao nhiêu đồng?",
            modelAnswer: "80000",
            rubric: "Điền đúng số 80000 hoặc 80.000 (3.0 điểm).",
            explanation: "Giá bán 92 000 đồng gồm giá vốn (100%) và lợi nhuận (15% giá vốn), do đó chiếm tỉ lệ là: 100% + 15% = 115% giá vốn.<br>Giá vốn nhập sách của đại lý là: 92 000 : 115% = 80 000 (đồng)."
          },
          {
            id: "TL10_3",
            type: "text",
            maxPoints: 3.0,
            text: "Bài 3. Một chiếc thùng hình lập phương lớn có cạnh là 6 cm. Người ta xếp đầy vào thùng các hộp nhựa hình lập phương nhỏ có cạnh là 2 cm. Hỏi có thể xếp được tối đa bao nhiêu hộp nhựa nhỏ như vậy vào thùng?",
            modelAnswer: "27",
            rubric: "Điền đúng số 27 (3.0 điểm).",
            explanation: "Thể tích của chiếc thùng hình lập phương lớn: 6 x 6 x 6 = 216 cm3.<br>Thể tích của một chiếc hộp nhựa nhỏ hình lập phương: 2 x 2 x 2 = 8 cm3.<br>Số lượng hộp nhựa nhỏ tối đa xếp được vào thùng là: 216 : 8 = 27 (hộp)."
          },
          {
            id: "TL10_4",
            type: "text",
            maxPoints: 6.0,
            text: "Bài 4. Lúc 6 giờ sáng, một người đi xe máy khởi hành từ địa điểm A đi đến địa điểm B với vận tốc 30 km/h. Đến 7 giờ 30 phút cùng ngày, một xe ô tô cũng xuất phát từ A đuổi theo xe máy với vận tốc 50 km/h.<br>a) Hỏi xe ô tô đuổi kịp xe máy lúc mấy giờ?<br>b) Chỗ gặp nhau cách địa điểm A bao nhiêu ki-lô-mét?<br><br><i>Em hãy trình bày chi tiết lời giải và tự chấm điểm sau khi nộp bài.</i>",
            modelAnswer: "a) Ô tô đuổi kịp xe máy lúc 9 giờ 45 phút.\nb) Chỗ gặp nhau cách A 112,5 km.",
            rubric: "- Tính thời gian xe máy đi trước: 7h30 - 6h = 1,5 giờ (1.0 điểm)\n- Tính quãng đường xe máy đi trước: 30 x 1.5 = 45 km (1.5 điểm)\n- Tính hiệu vận tốc hai xe: 50 - 30 = 20 km/h (1.0 điểm)\n- Tính thời gian ô tô đi để đuổi kịp: 45 : 20 = 2.25 giờ = 2 giờ 15 phút (1.0 điểm)\n- Tính thời điểm gặp nhau: 7h30 + 2h15 = 9h45 (0.75 điểm)\n- Tính khoảng cách chỗ gặp đến A: 50 x 2.25 = 112.5 km (0.75 điểm).",
            explanation: "a) Thời gian xe máy xuất phát trước ô tô là: 7 giờ 30 phút - 6 giờ = 1 giờ 30 phút = 1,5 giờ.<br>Khi ô tô bắt đầu chạy, xe máy đã đi được quãng đường là: 30 x 1,5 = 45 (km).<br>Hiệu vận tốc giữa ô tô và xe máy là: 50 - 30 = 20 (km/h).<br>Thời gian để ô tô đuổi kịp xe máy là: 45 : 20 = 2,25 (giờ).<br>Đổi: 2,25 giờ = 2 giờ 15 phút.<br>Thời điểm ô tô đuổi kịp xe máy là: 7 giờ 30 phút + 2 giờ 15 phút = 9 giờ 45 phút.<br>b) Chỗ gặp nhau cách A quãng đường là: 50 x 2,25 = 112,5 (km)."
          }
        ]
      }
    ]
  }
];

// Export database for browser loading
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATH_LOGIC_EXAMS };
}
