// tracnghiem_exams.js - Aptitude Multiple Choice Exams Database
// Contains 10 exams: 3 official (2023, 2024, 2025) and 7 newly composed exams.
// Total score: 40.0 points (20 questions x 2.0 pts). Duration: 30 minutes.
// Structure: Q1-Q17 in English (Science, History, Geography, Math, Logic), Q18-Q20 in Vietnamese.

const TRACNGHIEM_EXAMS = [
  {
    "id": 1,
    "title": "Đề thi trắc nghiệm số 1 (Chính thức năm 2023)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN1_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. Where is pollen stored in a flower?",
            "options": [
              "A. Petals",
              "B. Anthers",
              "C. Ovary",
              "D. Stigma"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Trong hoa, phấn hoa (pollen) được sản sinh và lưu trữ ở bao phấn (Anthers). Nhụy hoa (Stigma) nhận phấn hoa, bầu nhụy (Ovary) chứa noãn, cánh hoa (Petals) bảo vệ và thu hút côn trùng."
          },
          {
            "id": "TN1_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. Why is it dangerous to put a plug in the socket when it is wet?",
            "options": [
              "A. Because it causes a fire due to the combination of water and electricity.",
              "B. Because it damages the electrical system as water affects the proper current of electricity.",
              "C. Because it causes an electric shock as water allows electricity to run through it.",
              "D. Because it causes the plug to malfunction as water prevents the current of electricity."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Nước thường chứa tạp chất dẫn điện tốt. Cắm phích cắm khi tay ướt hoặc ổ cắm bị ướt dễ gây giật điện (electric shock) vì nước cho dòng điện chạy qua nó và truyền sang cơ thể người."
          },
          {
            "id": "TN1_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. The otter catches fish and birds for food, so it is called ______.",
            "options": [
              "A. a predator",
              "B. a prey",
              "C. a herbivore",
              "D. a producer"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Rái cá (otter) săn bắt cá và chim làm thức ăn nên nó là động vật ăn thịt/săn mồi (predator). Prey là con mồi, herbivore là động vật ăn cỏ, producer là sinh vật sản xuất."
          },
          {
            "id": "TN1_4",
            "image": "images/2023_Q4.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. There are different circuits using the same type of bulbs, fans and batteries. Point out which bulb in the following pictures is the brightest.",
            "options": [
              "A. Bulb in Picture 1",
              "B. Bulb in Picture 2",
              "C. Bulb in Picture 3",
              "D. Bulb in Picture 4"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Mạch điện có bóng đèn sáng nhất là mạch có điện thế cấp tốt nhất mà không bị giảm hiệu điện thế do các linh kiện nối tiếp khác (quạt, đèn khác) chia sẻ năng lượng. Theo sơ đồ chính thức 2023, đáp án là B."
          },
          {
            "id": "TN1_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. I’d recommend this particular place for you to spend a weekend evening. In the middle of this area, you can see the beauty of the Sài Gòn river at one end, and a great statue in front of an ancient municipal building at the other end. It is so wonderful to leisurely walk in the exciting atmosphere and enjoy the street performances and snack here. This is also the place where big events are celebrated. This place is known as _______.",
            "options": [
              "A. Nhà Rồng wharf",
              "B. Bùi Viện walking street",
              "C. Nguyễn Huệ walking street",
              "D. Bạch Đằng wharf"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Phố đi bộ Nguyễn Huệ nằm ở trung tâm Quận 1, một đầu hướng ra sông Sài Gòn, một đầu là tượng đài Chủ tịch Hồ Chí Minh trước trụ sở UBND Thành phố (tòa nhà cổ kính). Đây là nơi vui chơi cuối tuần và tổ chức các sự kiện lớn."
          },
          {
            "id": "TN1_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. In about the year of 700 B.C., our country was called _______ _______ _______ .",
            "options": [
              "A. Đại Việt",
              "B. Âu Lạc",
              "C. Đại Cồ Việt",
              "D. Văn Lang"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Vào khoảng năm 700 trước Công nguyên (B.C.), nhà nước đầu tiên của nước ta ra đời với tên gọi là Văn Lang, do các vua Hùng đứng đầu."
          },
          {
            "id": "TN1_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. What is the primary source of energy for Planet Earth?",
            "options": [
              "A. Fire",
              "B. The sun",
              "C. Geothermal heat",
              "D. Wind"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Mặt trời (The sun) cung cấp năng lượng ánh sáng và nhiệt, là nguồn năng lượng chính và quan trọng nhất cho sự sống và hoạt động của Trái Đất."
          },
          {
            "id": "TN1_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. What do goats eat ?",
            "options": [
              "A. Insects and worms",
              "B. Rocks and stones",
              "C. Fish and meat",
              "D. Grass and leaves"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Dê là động vật ăn cỏ (herbivore) nên thức ăn chủ yếu của chúng là cỏ và lá cây (grass and leaves)."
          },
          {
            "id": "TN1_9",
            "image": "images/2023_Q9.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. The bar chart below gives information about the population of Vietnam from 1979 to 1999. What was the population growth in Vietnam between 1979 and 1999?",
            "options": [
              "A. 11.7 million people",
              "B. 23.6 million people",
              "C. 11.9 million people",
              "D. 21.6 million people"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Số liệu biểu đồ cột cho thấy dân số năm 1979 là 52.7 triệu và năm 1999 là 76.3 triệu. Sự tăng trưởng dân số là: 76.3 - 52.7 = 23.6 triệu người."
          },
          {
            "id": "TN1_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which river is the southern delta of Vietnam mainly built up by?",
            "options": [
              "A. The Sài Gòn river",
              "B. The Nho Quế river",
              "C. The Thu Bồn river",
              "D. The Mê Công river"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Đồng bằng sông Cửu Long (Southern delta) được bồi đắp chủ yếu bởi phù sa của hệ thống sông Mê Công."
          },
          {
            "id": "TN1_11",
            "image": "images/2023_Q11.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does the sign on the right say?",
            "options": [
              "A. We are brother and sister. Say hello to us.",
              "B. Holding hands is good. Do it now, please.",
              "C. Kids often cross this road. Please slow down.",
              "D. The road is slippery. Take care of your kids."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Biển báo trẻ em dắt tay nhau qua đường cảnh báo người lái xe rằng khu vực này thường có trẻ em sang đường (như gần trường học), cần đi chậm và chú ý quan sát."
          },
          {
            "id": "TN1_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the best choice A, B, C, or D to fill in the blank. Luka spends most of his time _______ with his toys.",
            "options": [
              "A. playing",
              "B. plays",
              "C. to play",
              "D. played"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cấu trúc với động từ spend: Spend + time + V-ing (dành thời gian làm gì). Do đó ta chọn 'playing'."
          },
          {
            "id": "TN1_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the word that does not belong with the other ones:",
            "options": [
              "A. sea",
              "B. hill",
              "C. river",
              "D. brook"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sea (biển), river (sông), brook (suối nhỏ) đều là các thực thể nước (water bodies), trong khi hill (đồi) là thực thể địa hình đất cạn."
          },
          {
            "id": "TN1_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. An, Bình, Cường and Dũng, standing in a row, have their ages arranged from the oldest to the youngest. The age difference of any two students next to each other is an equal number and the product of the ages of An and Bình is 120. What is the sum of their ages?",
            "options": [
              "A. 30",
              "B. 34",
              "C. 36",
              "D. 42"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Gọi tuổi của 4 bạn lần lượt là A, B, C, D (A > B > C > D). Vì hiệu số tuổi các bạn liền kề bằng nhau và tích tuổi A và B là 120, ta tìm hai ước của 120 lệch nhau d tuổi sao cho tuổi của C và D vẫn dương. Nếu A = 12, B = 10 (lệch nhau d=2), thì C = 8, D = 6. Tuổi 4 bạn là: 12, 10, 8, 6 (phù hợp). Tổng tuổi là: 12 + 10 + 8 + 6 = 36."
          },
          {
            "id": "TN1_15",
            "image": "images/2023_Q15.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. These 4 equal triangles have some parts colored as below. In which picture is the area of the blackened parts the smallest?",
            "options": [
              "A. Picture 1",
              "B. Picture 2",
              "C. Picture 3",
              "D. Picture 4"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Tính tỉ lệ diện tích phần tô đen trong mỗi tam giác đều bằng nhau. Qua biến đổi hình học và tính toán phân số diện tích, hình số 4 có diện tích phần đen nhỏ nhất."
          },
          {
            "id": "TN1_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. Tâm wants to change one 10 000 đồng banknote into 1 000 đồng, 2 000 đồng, and 5 000 đồng banknotes. How many possible ways are there to make this change?",
            "options": [
              "A. 4",
              "B. 5",
              "C. 10",
              "D. 11"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Phương trình: x + 2y + 5z = 10 (với x, y, z là số tờ 1k, 2k, 5k; x,y,z >= 0).\n- Nếu z = 2: (x,y) = (0,0) -> 1 cách.\n- Nếu z = 1: x + 2y = 5. y có thể là 0, 1, 2 -> 3 cách.\n- Nếu z = 0: x + 2y = 10. y có thể từ 0 đến 5 -> 6 cách.\nTổng số cách: 1 + 3 + 6 = 10 cách."
          },
          {
            "id": "TN1_17",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. Which number is right for the blank? 2 ; 4 ; 10 ; 28 ; 82 ; _____ .",
            "options": [
              "A. 190",
              "B. 234",
              "C. 242",
              "D. 244"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Hiệu giữa các số liên tiếp: 4-2=2, 10-4=6, 28-10=18, 82-28=54. Các hiệu số là cấp số nhân nhân 3 (2, 6, 18, 54). Hiệu tiếp theo: 54 * 3 = 162. Số cần tìm: 82 + 162 = 242. Quy luật khác: số sau = số trước * 3 - 2."
          },
          {
            "id": "TN1_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Chọn từ thích hợp để điền vào chỗ trống trong câu: Chỗ ướt mẹ nằm, chỗ _____ con lăn.",
            "options": [
              "A. ẩm",
              "B. cao",
              "C. ráo",
              "D. nhỏ"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Thành ngữ đầy đủ là: 'Chỗ ướt mẹ nằm, chỗ ráo con lăn', ca ngợi tình yêu thương bao la và sự hy sinh của người mẹ luôn nhường những gì tốt đẹp nhất (khô ráo) cho con."
          },
          {
            "id": "TN1_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Cách nối các vế câu trong câu ghép nào dưới đây chưa hợp lý?",
            "options": [
              "A. Trời càng nắng gắt, hoa giấy càng bồng lên rực rỡ.",
              "B. Vì tôi đi xa nhưng tôi luôn nhớ đến mảnh đất yêu thương này.",
              "C. Giá mà bạn đưa thêm hình ảnh vào thì bài thuyết trình đã hay hơn.",
              "D. Chúng tôi nói đến đâu, anh ấy hiểu đến đó."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Câu B sai ngữ pháp vì dùng sai cặp quan hệ từ: 'Vì' biểu thị nguyên nhân, 'nhưng' biểu thị sự đối lập. Không thể dùng kết hợp 'Vì... nhưng...'. Sửa đúng: 'Tuy đi xa nhưng tôi luôn nhớ...' hoặc 'Vì tôi đi xa nên tôi rất nhớ...'."
          },
          {
            "id": "TN1_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Đọc đoạn văn sau. [...] Nếu đọc được mười quyển sách không quan trọng, không bằng đem thời gian, sức lực đọc mười quyển ấy mà đọc một quyển thật sự có giá trị. Nếu đọc được mười quyển sách mà chỉ lướt qua, không bằng chỉ lấy một quyển mà đọc mười lần. (Bàn về đọc sách, Chu Quang Tiềm). Câu nào dưới đây có thể dùng làm câu mở đoạn phù hợp cho đoạn văn trên?",
            "options": [
              "A. Đọc nhiều quyển sách thật nhanh để tiếp thu kiến thức nhiều nhất có thể.",
              "B. Đọc sách không chỉ là việc của cá nhân mà đó còn là việc của toàn nhân loại.",
              "C. Đọc sách không cần phải đọc thật kĩ, chủ yếu phải lướt cho nhanh, đọc cho nhiều.",
              "D. Đọc sách không cốt lấy nhiều, quan trọng nhất là phải chọn cho tinh, đọc cho kĩ."
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Đoạn văn nhấn mạnh tầm quan trọng của việc đọc sâu hơn là đọc rộng lướt qua ('đọc một quyển có giá trị hơn mười quyển không quan trọng', 'đọc một quyển mười lần hơn mười quyển lướt qua'). Do đó câu mở đoạn khái quát ý này là đáp án D."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Đề thi trắc nghiệm số 2 (Chính thức năm 2024)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN2_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. Copper (đồng) is the primary material used for most residential electricity in the house. When it comes to high voltage power lines, aluminium (nhôm) is much preferred. Why?",
            "options": [
              "A. Aluminium is not corroded.",
              "B. Aluminium conducts electricity better than copper.",
              "C. Aluminium is lighter than copper.",
              "D. Aluminium is more expensive than copper."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Mặc dù đồng dẫn điện tốt hơn nhôm, nhưng nhôm nhẹ hơn đồng rất nhiều (khoảng 3 lần). Đối với đường dây cao thế trên cao kéo dài hàng ngàn km, vật liệu nhẹ là ưu tiên hàng đầu để giảm tải trọng lên cột điện và dây tự võng."
          },
          {
            "id": "TN2_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. You are provided a mixture of iron, sand and salt. How can you separate them?",
            "options": [
              "A. Use the magnet → create the solution from water → evaporate → filter",
              "B. Filter → use the magnet → create the solution from water → evaporate",
              "C. Evaporate → use the magnet → create the solution from water → filter",
              "D. Use the magnet → create the solution from water → filter → evaporate"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Quy trình tách hỗn hợp: 1. Dùng nam châm (magnet) để hút sắt ra trước. 2. Hòa tan hỗn hợp còn lại (cát và muối) vào nước để muối tan hết. 3. Lọc (filter) dung dịch để giữ lại cát không tan trên giấy lọc. 4. Cô cạn (evaporate) dung dịch muối để nước bay hơi thu được muối tinh khiết."
          },
          {
            "id": "TN2_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. Which of the following behaviors is not in danger of being infected with HIV/AIDS?",
            "options": [
              "A. Bandage the bleeding injury without medical gloves",
              "B. Play with used injection needles",
              "C. Talk and console patients infected with HIV/AIDS",
              "D. Have an intravenous infusion without the legal source"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "HIV không lây qua các tiếp xúc thông thường như nói chuyện, chia sẻ, an ủi người bệnh (C). Các hành vi A, B, D đều tiếp xúc với máu hoặc dịch sinh học nên có nguy cơ lây nhiễm cao."
          },
          {
            "id": "TN2_4",
            "image": "images/2024_Q4.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. Which of the following electrical circuits can light the bulb?",
            "options": [
              "A. Picture 1",
              "B. Picture 2",
              "C. Picture 3",
              "D. Picture 4"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Để bóng đèn sáng, mạch điện phải là mạch kín, dây điện nối từ hai cực của pin đến các bộ phận tương ứng trên đui đèn. Hình 1 là mạch điện tiêu chuẩn đáp ứng điều này."
          },
          {
            "id": "TN2_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. What is the best way to get plenty of vitamin C and fiber (chất xơ)?",
            "options": [
              "A. Eat fresh fruits instead of drinking fruit juice",
              "B. Drink 100% pure fruit juice",
              "C. Drink fruit juice containing lots of sugar",
              "D. Eat lots of meat and less vegetables"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Ăn trái cây tươi (fresh fruits) giúp giữ nguyên lượng chất xơ (fiber) và vitamin C tự nhiên, trong khi ép nước sẽ làm mất hầu hết chất xơ và mất bớt vitamin."
          },
          {
            "id": "TN2_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. Which of the following fuels is in the form of liquid?",
            "options": [
              "A. wax",
              "B. coal",
              "C. biogas",
              "D. petrol"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Petrol (xăng) là chất đốt ở thể lỏng. Sáp (wax) và than đá (coal) ở thể rắn, khí sinh học (biogas) ở thể khí."
          },
          {
            "id": "TN2_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. This ceremony was celebrated on May 7th, 2024 in our country to remind us of the victory over the fighting against French invaders. What is the name of the victory?",
            "options": [
              "A. The Việt Bắc victory",
              "B. The Biên giới victory",
              "C. The Điện Biên Phủ victory",
              "D. The Vạn Tường victory"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Ngày 7/5/1954 là ngày Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu', đánh dấu sự thất bại hoàn toàn của thực dân Pháp tại Việt Nam. Lễ kỷ niệm 70 năm chiến thắng được tổ chức trọng thể vào 7/5/2024."
          },
          {
            "id": "TN2_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. In Thủ Đức city, there is a bridge associated with the final battle that opened the gateway to Sài Gòn to make a great contribution for the historic victory of April 30th, 1975. What is the name of the bridge?",
            "options": [
              "A. Thủ Thiêm bridge",
              "B. Rạch Chiếc bridge",
              "C. Bình Lợi bridge",
              "D. Bình Triệu bridge"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Cầu Rạch Chiếc (nằm trên xa lộ Hà Nội thuộc TP. Thủ Đức) là địa điểm diễn ra trận chiến ác liệt của các chiến sĩ đặc công thủy để bảo vệ cầu nguyên vẹn, mở đường cho xe tăng tiến vào giải phóng Sài Gòn ngày 30/4/1975."
          },
          {
            "id": "TN2_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. With four distinct seasons in a year in France, which climate zone is Paris in?",
            "options": [
              "A. Tropical zone",
              "B. Temperate zone",
              "C. Frigid zone",
              "D. Monsoon climate zone"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Nước Pháp và thủ đô Paris nằm ở đới khí hậu ôn hòa (Temperate zone), có bốn mùa rõ rệt trong năm."
          },
          {
            "id": "TN2_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which river is the border between Thủ Đức city and urban districts of Hồ Chí Minh City?",
            "options": [
              "A. Đồng Nai river",
              "B. Sông Bé river",
              "C. Sài Gòn river",
              "D. Mê Công river"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Sông Sài Gòn chảy qua địa phận thành phố và đóng vai trò là ranh giới tự nhiên ngăn cách TP. Thủ Đức với các quận nội thành khác của TP.HCM."
          },
          {
            "id": "TN2_11",
            "image": "images/2024_Q11.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does the sign on the right say?",
            "options": [
              "A. This route is forbidden to everyone.",
              "B. Cyclists are not allowed to enter this route.",
              "C. Cyclists should not go fast at night.",
              "D. Cycle route is ahead."
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Theo đề thi chính thức năm 2024, hình vẽ của câu hỏi này biểu thị làn đường dành cho xe đạp phía trước. Do đó đáp án là D (Cycle route is ahead)."
          },
          {
            "id": "TN2_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the best answer A, B, C or D. Some people think that Science is ________ for them than other subjects.",
            "options": [
              "A. the easiest",
              "B. so easy",
              "C. easy",
              "D. much easier"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Có từ 'than' báo hiệu cấu trúc so sánh hơn. 'easier' là dạng so sánh hơn của 'easy'. Từ 'much' đứng trước để nhấn mạnh mức độ so sánh. Do đó chọn 'much easier'."
          },
          {
            "id": "TN2_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the word that does not belong with the other ones.",
            "options": [
              "A. teacher",
              "B. cooker",
              "C. engineer",
              "D. reporter"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Teacher (giáo viên), engineer (kỹ sư), reporter (phóng viên) là danh từ chỉ nghề nghiệp con người. Cooker là nồi cơm điện/bếp lò (danh từ chỉ đồ vật)."
          },
          {
            "id": "TN2_14",
            "image": "images/2024_Q14.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. Which puzzle piece below can be matched with the given puzzle piece to make a square?",
            "options": [
              "A. Piece A",
              "B. Piece B",
              "C. Piece C",
              "D. Piece D"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Bằng cách đối chiếu các khía răng cưa, hình răng cưa lồi lõm của mảnh ghép C khớp vừa vặn với mảnh ghép ban đầu để ghép thành hình vuông hoàn chỉnh."
          },
          {
            "id": "TN2_15",
            "image": "images/2024_Q15.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. Mr. Nam often uses students' drawings to decorate the classroom. The paintings are hung on a sturdy rope with clips. The teacher needs 3 clips for each painting but he only needs one clip for two paintings next to each other. How many clips does he need to hang 15 pictures?",
            "options": [
              "A. 31",
              "B. 32",
              "C. 33",
              "D. 34"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Giữa 2 bức tranh cạnh nhau có 1 kẹp chung. Với n bức tranh nối tiếp nhau, số kẹp cần dùng là 2n + 1 kẹp. Áp dụng n = 15: số kẹp = 2 * 15 + 1 = 31 kẹp."
          },
          {
            "id": "TN2_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. Binh’s family went on a summer vacation by train. Binh slept for 3/4 of an hour and stayed awake for 3/4 of the time on the train. How long did Binh’s family spend on the train?",
            "options": [
              "A. 90 minutes",
              "B. 4 hours",
              "C. 45 minutes",
              "D. 3 hours"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Gọi tổng thời gian đi tàu là T (giờ). Bình thức hết 3/4 thời gian, nghĩa là thời gian ngủ chiếm 1 - 3/4 = 1/4 tổng thời gian. Đề bài cho thời gian ngủ là 3/4 giờ. Ta có: T * 1/4 = 3/4 -> T = 3 giờ."
          },
          {
            "id": "TN2_17",
            "image": "images/2024_Q17.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. The following figure is made up of squares, semicircles and quadrants. Find the area of the shaded portion of the figures if the length of the biggest square is 40 cm.",
            "options": [
              "A. 1099 cm2",
              "B. 1256 cm2",
              "C. 1344 cm2",
              "D. 1570 cm2"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Dùa vào các phần khuyết tròn đối xứng và bù trừ diện tích giữa các phần trong hình vuông 40cm, ta tính toán được phần tô đen có diện tích xấp xỉ 1099 cm2."
          },
          {
            "id": "TN2_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Nhà tâm lý học Angela đã bỏ ra nhiều năm để tìm hiểu chìa khoá dẫn đến thành công. Dòng nào dưới đây nêu đúng nghĩa của từ chìa khoá trong câu trên ?",
            "options": [
              "A. Là phương tiện cao cấp, hiện đại dùng để làm việc.",
              "B. Là dụng cụ cao cấp, hiện đại dùng để mở, đóng cửa.",
              "C. Là phương thức, mấu chốt quan trọng để giải quyết công việc.",
              "D. Là công cụ bằng kim loại dùng tra vào ổ khoá để mở, đóng cửa."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Từ 'chìa khóa' trong câu này được sử dụng theo nghĩa chuyển (nghĩa ẩn dụ), chỉ phương thức, bí quyết, hay yếu tố cốt lõi/mấu chốt giúp đạt được sự thành công."
          },
          {
            "id": "TN2_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Người tốt là người biết lo nghĩ cho người khác, sẵn sàng cống hiến cho cộng đồng, quê hương, đất nước. ________ đã làm cho người khác ấm lòng, cảm thấy có niềm tin vào cuộc sống, làm cho cuộc sống tươi đẹp này tràn đầy tình yêu thương! (Sống là cho đâu chỉ nhận riêng mình, Nguyễn Đào Hiếu). Cụm từ nào sau đây có thể điền vào chỗ trống để hai câu trên được liên kết với nhau bằng cách thay thế từ ngữ?",
            "options": [
              "A. Những con người ấy",
              "B. Những người sống tốt",
              "C. Những người cống hiến",
              "D. Những người lo nghĩ"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cụm từ 'Những con người ấy' thay thế cho cụm từ 'Người tốt' (ở số nhiều ẩn dụ) của câu thứ nhất, giúp liên kết hai câu bằng phép thế, tránh lặp từ và giữ mạch văn trôi chảy."
          },
          {
            "id": "TN2_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Tha thứ là cung bậc cao nhất của tình yêu. Biết tha thứ, bạn sẽ có một tâm hồn hạnh phúc và bình yên (Robert Muller). Ý kiến trên của tác giả khuyên chúng ta sống thế nào?",
            "options": [
              "A. Hãy sống thật vui vẻ và lạc quan.",
              "B. Hãy sống bao dung với mọi người.",
              "C. Hãy sống thật hạnh phúc và bình yên.",
              "D. Hãy sống hết mình với mọi người."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "'Tha thứ' (forgiveness) đồng nghĩa với sự bao dung, độ lượng trước lỗi lầm của người khác. Tác giả khuyên chúng ta nên có lối sống bao dung để tâm hồn được thanh thản và hạnh phúc."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Đề thi trắc nghiệm số 3 (Chính thức năm 2025)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN3_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. Which of the following actions contributes to protect biodiversity?",
            "options": [
              "A. Cut down trees and deforest",
              "B. Raise wild animals as pets",
              "C. Plant trees, protect and take care of animals",
              "D. Tease animals when visiting the zoo"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Trồng cây, bảo vệ rừng và chăm sóc động vật (C) giúp duy trì môi trường sống tự nhiên, từ đó bảo vệ đa dạng sinh học (biodiversity). Phá rừng, nuôi thú hoang dã làm cảnh hay chọc phá thú đều làm tổn hại thiên nhiên."
          },
          {
            "id": "TN3_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. Iron nails left outside or in damp places for a long time are rusted. What do people usually do to prevent iron nails from being rusted ?",
            "options": [
              "A. Heat up iron nails before using",
              "B. Clean and dry iron nails after using",
              "C. Soak iron nails into salt water",
              "D. Paint or apply oil to iron nails"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Sơn hoặc bôi dầu (paint or apply oil) tạo ra lớp màng bảo vệ ngăn sắt tiếp xúc với oxy và hơi nước trong không khí, ngăn chặn quá trình oxy hóa gây gỉ sét."
          },
          {
            "id": "TN3_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. Juice a lemon ; put the lemon juice into a bowl ; dip a cotton swab into the lemon juice; use this cotton swab to write some letters on paper. After a while, all of the letters cannot be seen any more. What do you need to do to read these letters?",
            "options": [
              "A. Use a magnifying glass to look at the sheet of paper",
              "B. Soak the sheet of paper into cold water",
              "C. Heat up the sheet of paper",
              "D. Soak the sheet of paper into warm water"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Nước chanh chứa axit citric dễ bị carbon hóa (chuyển sang màu nâu) dưới tác động của nhiệt độ cao. Khi hơ nóng bức thư viết bằng nước chanh (heat up the paper), phần chữ viết sẽ hiện lên rõ ràng."
          },
          {
            "id": "TN3_4",
            "image": "images/2025_Q4.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. The box (Picture 1) has a removable front face, which is transparent. Minh uses this box and follows these steps to do an experiment: ... Which tube will the smoke of the incense rise from?",
            "options": [
              "A. rise from tube A",
              "B. rise from tube B",
              "C. rise from both tube A and tube B",
              "D. not rise from any tubes"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Ngọn nến đang cháy dưới ống A làm ấm không khí xung quanh, khiến không khí nhẹ đi và bay lên qua ống A. Không khí lạnh từ ống B sẽ tràn xuống thế chỗ, tạo dòng đối lưu hút khói hương từ ống B đi qua hộp và thoát ra ngoài qua ống A."
          },
          {
            "id": "TN3_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. Based on the given food chain (Seaweed -> Sea tiny shrimp -> Herring -> Tuna), how will the other species be affected if fishermen catch a large quantity of herring regularly ?",
            "options": [
              "A. Tuna increases, sea tiny shrimp decreases, seaweed increases.",
              "B. Tuna decreases, sea tiny shrimp increases, seaweed increases.",
              "C. Tuna increases, sea tiny shrimp decreases, seaweed decreases.",
              "D. Tuna decreases, sea tiny shrimp increases, seaweed decreases."
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Cá trích (Herring) giảm đi sẽ khiến cá ngừ (Tuna - sinh vật ăn cá trích) bị thiếu thức ăn nên giảm dân số. Ngược lại, tôm nhỏ (Sea tiny shrimp - thức ăn của cá trích) không bị cá trích săn bắt nhiều sẽ tăng dân số. Tôm tăng sẽ ăn nhiều tảo biển (Seaweed) khiến tảo giảm."
          },
          {
            "id": "TN3_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. Yogurt is made from condensed milk with lactic bacteria added to it. Why does yogurt have pleasant smell and light sour taste after being fermented (được lên men) ?",
            "options": [
              "A. Lactic bacteria change sugar in the condensed milk into organic acids.",
              "B. Lactic bacteria change protein in the condensed milk into organic acids.",
              "C. Lactic bacteria change lipid in the condensed milk into organic acids.",
              "D. Lactic bacteria change available substances in the condensed milk into Vitamin C."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Vi khuẩn lactic chuyển hóa đường lactose trong sữa đặc thành axit lactic (organic acid). Axit này tạo độ pH thấp làm đông tụ protein sữa và đem lại vị chua thanh mát đặc trưng cho sữa chua."
          },
          {
            "id": "TN3_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. Which of the following events marks the Liberation of Southern Việt Nam and National Reunification?",
            "options": [
              "A. The Declaration of Independence of President Hồ Chí Minh on September 2nd, 1945",
              "B. The victory of the Điện Biên Phủ campaign on May 7th, 1954",
              "C. The Liberation of Tây Nguyên on March 24th, 1975",
              "D. The complete victory of Hồ Chí Minh campaign on April 30th, 1975"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Chiến dịch Hồ Chí Minh lịch sử giành thắng lợi hoàn toàn vào ngày 30/4/1975, cờ đỏ sao vàng tung bay trên Dinh Độc Lập, đánh dấu sự nghiệp Giải phóng miền Nam và Thống nhất đất nước."
          },
          {
            "id": "TN3_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Metro line No.1 in Hồ Chí Minh City starts from Bến Thành station. What is the last station of Metro line No.1 ?",
            "options": [
              "A. Bến xe Suối Tiên station",
              "B. Ba Son station",
              "C. Thảo Điền station",
              "D. Thủ Đức station"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Tuyến Metro số 1 của TP.HCM (Bến Thành - Suối Tiên) có ga đầu tiên là Bến Thành và ga cuối cùng là ga Bến xe Suối Tiên (nằm tại khu vực cửa ngõ Suối Tiên)."
          },
          {
            "id": "TN3_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. On August 23rd, 2023, a section of Xa lộ Hà Nội highway, from Sài Gòn bridge to Thủ Đức intersection, was officially re-named after the first male General of the Vietnamese People’s Army. What’s his name?",
            "options": [
              "A. Võ Nguyên Giáp",
              "B. Mai Chí Thọ",
              "C. Văn Tiến Dũng",
              "D. Nguyễn Chí Thanh"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Đoạn đường Xa lộ Hà Nội dài khoảng 7,8 km từ cầu Sài Gòn đến ngã tư Thủ Đức được đặt tên là đường Võ Nguyên Giáp để vinh danh vị Đại tướng đầu tiên của Quân đội Nhân dân Việt Nam."
          },
          {
            "id": "TN3_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Household waste is one of the factors causing environmental pollution. What should residents in Hồ Chí Minh City do to minimize this kind of pollution ?",
            "options": [
              "A. Construct tall buildings, build reserve lakes",
              "B. Sort out, reuse and recycle household waste",
              "C. Build reserve lakes, reduce green space density",
              "D. Pave all sidewalks with granite"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Phân loại rác tại nguồn, tái sử dụng và tái chế rác thải sinh hoạt (Sort out, reuse and recycle) là giải pháp thực tế nhất của mỗi người dân giúp giảm thiểu áp lực lên bãi chôn lấp và bảo vệ môi trường."
          },
          {
            "id": "TN3_11",
            "image": "images/2025_Q11.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. People mustn’t get access to wild animals’ cages.",
              "B. People mustn’t give food to wild animals to avoid their dangerous reactions.",
              "C. People should feed wild animals as it can please them.",
              "D. People must give food to wild animals because they are in the cages."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Biển báo cấm cho thú ăn (do không đảm bảo vệ sinh hoặc có thể bị thú cắn/phản ứng nguy hiểm). Đáp án đúng là B."
          },
          {
            "id": "TN3_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. In recent years, Thủ Đức City ________ rapidly with new high-rise buildings and modern infrastructure.",
            "options": [
              "A. has developed",
              "B. developed",
              "C. develops",
              "D. was developing"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cụm trạng từ thời gian 'In recent years' (trong những năm gần đây) chỉ một hành động bắt đầu trong quá khứ kéo dài đến hiện tại, thích hợp dùng thì Hiện tại hoàn thành: 'has developed'."
          },
          {
            "id": "TN3_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the word that does not belong with the other ones:",
            "options": [
              "A. cliff",
              "B. valley",
              "C. dune",
              "D. scene"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Cliff (vách đá), valley (thung lũng), dune (đụn cát) là những danh từ chỉ các thực thể địa hình cụ thể trong tự nhiên. Scene (cảnh tượng, phong cảnh) là danh từ khái quát."
          },
          {
            "id": "TN3_14",
            "image": "images/2025_Q14.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. The following grid (Picture 3) can be filled with exactly 4 shapes (star, square, circle and diamond). There is no duplicated shape in each row or column. The shape at the ? is:",
            "options": [
              "A. Star",
              "B. Square",
              "C. Circle",
              "D. Diamond"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Giải câu đố Sudoku hình học bằng cách điền các hình sao cho mỗi hàng/cột không lặp lại hình nào. Vị trí dấu chấm hỏi sẽ là hình vuông (Square)."
          },
          {
            "id": "TN3_15",
            "image": "images/2025_Q15.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. Picture 4 shows some identical cups which are stacked on top of each other. A stack of 8 cups is 42 cm high. A stack of 2 cups is 18 cm high. How high is a stack of 6 cups ?",
            "options": [
              "A. 24 cm",
              "B. 28 cm",
              "C. 34 cm",
              "D. 40 cm"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Gọi chiều cao 1 cái cốc là H, khoảng cách nhô lên khi xếp chồng thêm 1 cái là d.\nTa có: H + 7d = 42 và H + d = 18.\nTrừ hai phương trình: 6d = 24 -> d = 4 (cm). Chiều cao H = 14 (cm).\nChiều cao của tháp 6 cốc: H + 5d = 14 + 5 * 4 = 34 (cm)."
          },
          {
            "id": "TN3_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. A person mixes 3 full cups of milk and 2 full cups of coffee to make one full mug of milk coffee. After drinking half of the mixture in the mug, he pours milk into the mug to fill it up again. What percentage of milk is in the final mixture?",
            "options": [
              "A. 66,66%",
              "B. 80%",
              "C. 60%",
              "D. 70%"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Tỉ lệ sữa ban đầu là 3/5 = 60%, cà phê là 40%. Uống nửa cốc thì tỉ lệ sữa vẫn là 60% (tương đương 1.5 cốc sữa), cà phê là 40% (1 cốc cà phê). Khi đổ thêm sữa cho đầy lại (tức đổ thêm 2.5 cốc sữa), lượng sữa trong cốc trở thành 1.5 + 2.5 = 4 cốc. Tổng thể tích cốc là 5 cốc. Tỉ lệ sữa mới là 4/5 = 80%."
          },
          {
            "id": "TN3_17",
            "image": "images/2025_Q17.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. There are 7 dices (Picture 5). Each face of a dice has a number which ranges from 1 to 6. The sum of two numbers on the opposite side of the same dice is always 7. The sum of the numbers on any two faces facing and touching each other is always 8. Find the value of ? .",
            "options": [
              "A. 2",
              "B. 3",
              "C. 4",
              "D. 5"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Bằng cách tính toán lần lượt số trên các mặt tiếp xúc (tổng hai mặt kề nhau luôn là 8, tổng hai mặt đối diện luôn là 7), suy luận ra mặt chấm hỏi có giá trị là 2."
          },
          {
            "id": "TN3_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Đọc đoạn văn sau: ... Phía sau xe chở hai con lợn con - là cách ông gọi trêu hai anh em. Dòng nào sau đây nêu đúng tác dụng của dấu gạch ngang được sử dụng trong đoạn văn trên?",
            "options": [
              "A. Đánh dấu các ý trong một đoạn liệt kê.",
              "B. Đánh dấu bộ phận chú thích, giải thích trong câu.",
              "C. Nối các từ ngữ trong một liên danh.",
              "D. Đánh dấu lời nói trực tiếp của nhân vật."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Dấu gạch ngang đứng trước cụm từ 'là cách ông gọi trêu hai anh em' có vai trò cô lập bộ phận này nhằm bổ sung ý nghĩa, chú thích và giải thích rõ vì sao ông lại nói 'chở hai con lợn con'."
          },
          {
            "id": "TN3_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Mùa thu mới chớm nhưng nước đã ________. Trông thấy cả hòn cuội trắng tinh nằm dưới đáy. Chọn từ thích hợp điền vào chỗ trống.",
            "options": [
              "A. trong trẻo",
              "B. trong lành",
              "C. trong vắt",
              "D. trong trắng"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "'Trong vắt' miêu tả đặc điểm của nước đạt đến mức độ rất trong, không có một chút vẩn đục nào, đến mức nhìn thấu tận đáy thấy được hòn cuội. Từ 'trong trẻo' thường dùng cho âm thanh/bầu trời, 'trong lành' cho không khí."
          },
          {
            "id": "TN3_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Đọc đoạn thơ: Đất nước tôi, dáng hình cong mềm mại... Đoạn thơ trên đã khơi gợi trong em tình cảm, cảm xúc gì?",
            "options": [
              "A. Tái hiện những trang sử vẻ vang của dân tộc Việt Nam thời kì dựng nước và giữ nước.",
              "B. Yêu mến, tự hào về vẻ đẹp của đất nước và con người Việt Nam kiên cường, bất khuất.",
              "C. Trân trọng sự tài hoa và những giá trị văn hoá truyền thống của dân tộc Việt Nam.",
              "D. Khẳng định vẻ đẹp thiên nhiên trù phú, thơ mộng, trữ tình trên mọi miền đất nước."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Khổ thơ ca ngợi dáng hình quê hương mềm mại xinh đẹp và những ngọn núi sông ghi dấu ngàn năm anh dũng kiên cường của nhân dân. Qua đó, khơi dậy niềm tự hào sâu sắc về đất nước và tinh thần đấu tranh bất khuất của dân tộc."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Đề thi trắc nghiệm số 4 (Biên soạn - Đất nước và Con người)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN4_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. Which part of a plant absorbs water and minerals from the soil?",
            "options": [
              "A. Leaves",
              "B. Stem",
              "C. Roots",
              "D. Flowers"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Rễ cây (Roots) có chức năng đâm sâu vào đất để hút nước và các chất khoáng hòa tan nuôi cây."
          },
          {
            "id": "TN4_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. What state of matter has a definite volume but no definite shape?",
            "options": [
              "A. Solid",
              "B. Liquid",
              "C. Gas",
              "D. Plasma"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Chất lỏng (Liquid) có thể tích xác định nhưng hình dạng không xác định (nó có hình dạng của vật chứa nó)."
          },
          {
            "id": "TN4_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. Why are handles of cooking pans usually made of wood or plastic?",
            "options": [
              "A. Because wood and plastic are good conductors of electricity.",
              "B. Because wood and plastic make the pans look more beautiful.",
              "C. Because wood and plastic are poor conductors of heat (insulators).",
              "D. Because wood and plastic can withstand extremely high temperatures without burning."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Gỗ và nhựa là chất dẫn nhiệt kém (chất cách nhiệt), giúp bảo vệ tay không bị bỏng khi cầm vào quai/cán chảo."
          },
          {
            "id": "TN4_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. What device is used to open or close an electrical circuit?",
            "options": [
              "A. Battery",
              "B. Switch",
              "C. Bulb",
              "D. Wire"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Công tắc (Switch) dùng để đóng hoặc ngắt mạch điện, từ đó điều khiển các thiết bị điện."
          },
          {
            "id": "TN4_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. Which of the following is a producer in a food chain?",
            "options": [
              "A. Green plant",
              "B. Grasshopper",
              "C. Frog",
              "D. Snake"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Thực vật màu xanh (Green plant) là sinh vật sản xuất (producer) vì chúng tự tổng hợp chất dinh dưỡng thông qua quang hợp."
          },
          {
            "id": "TN4_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. Which gas do plants release into the air during photosynthesis?",
            "options": [
              "A. Oxygen",
              "B. Carbon dioxide",
              "C. Nitrogen",
              "D. Hydrogen"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Trong quá trình quang hợp, thực vật hấp thụ khí cacbônic và giải phóng khí ôxy (Oxygen) ra môi trường."
          },
          {
            "id": "TN4_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. Which city is known as the 'City of Thousand Flowers' in Vietnam?",
            "options": [
              "A. Nha Trang",
              "B. Vũng Tàu",
              "C. Đà Lạt",
              "D. Sa Pa"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Thành phố Đà Lạt nổi tiếng với khí hậu mát mẻ quanh năm và có rất nhiều loài hoa đẹp nên được gọi là 'Thành phố Ngàn hoa'."
          },
          {
            "id": "TN4_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Which general defeated the Southern Han army on the Bạch Đằng River in 938?",
            "options": [
              "A. Đinh Bộ Lĩnh",
              "B. Ngô Quyền",
              "C. Trần Hưng Đạo",
              "D. Lê Lợi"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Năm 938, Ngô Quyền chỉ huy quân dân ta cắm cọc gỗ đầu bịt sắt trên sông Bạch Đằng, đánh tan quân Nam Hán, mở ra kỷ nguyên độc lập lâu dài."
          },
          {
            "id": "TN4_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of France?",
            "options": [
              "A. Paris",
              "B. London",
              "C. Berlin",
              "D. Rome"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Thủ đô của nước Pháp là thành phố Paris, một trung tâm văn hóa và kinh tế lớn của thế giới."
          },
          {
            "id": "TN4_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which famous lighthouse built in 1862 on the top of Nhỏ Mountain is one of the oldest lighthouses in Vietnam?",
            "options": [
              "A. Vũng Tàu Lighthouse",
              "B. Kê Gà Lighthouse",
              "C. Đại Lãnh Lighthouse",
              "D. Song Tử Tây Lighthouse"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Hải đăng Vũng Tàu nằm trên đỉnh núi Nhỏ (Tao Phùng), được người Pháp xây dựng năm 1862 để dẫn đường cho tàu thuyền, là một trong những ngọn hải đăng lâu đời nhất Việt Nam."
          },
          {
            "id": "TN4_11",
            "image": "images/sign_E4.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. Bicycles are allowed on this road.",
              "B. No entry for all vehicles.",
              "C. Drivers must park their vehicles here.",
              "D. One-way street ahead."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Biển báo đường cấm đi ngược chiều (Biển P.102). Yêu cầu tất cả các phương tiện không được đi vào theo chiều đặt biển."
          },
          {
            "id": "TN4_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the best option: My sister is interested _______ learning English.",
            "options": [
              "A. in",
              "B. on",
              "C. at",
              "D. with"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cấu trúc: 'be interested in sth/V-ing' có nghĩa là quan tâm, thích thú với cái gì."
          },
          {
            "id": "TN4_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the best answer: If it _______ tomorrow, we will postpone our picnic.",
            "options": [
              "A. rain",
              "B. rained",
              "C. rains",
              "D. will rain"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Câu điều kiện loại 1: If + S + V(hiện tại đơn), S + will + V-inf. Chủ ngữ 'it' nên động từ chia là 'rains'."
          },
          {
            "id": "TN4_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. Amy and John have 60 peanuts in total. John has 2 times as much as Amy's. How many peanuts does John have?",
            "options": [
              "A. 40",
              "B. 20",
              "C. 30",
              "D. 45"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Tổng số phần bằng nhau: 1 (Amy) + 2 (John) = 3 phần. Giá trị 1 phần (số lạc của Amy): 60 / 3 = 20 hạt. Số lạc của John: 20 * 2 = 40 hạt."
          },
          {
            "id": "TN4_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. The library has 6000 books. The number of books increased by 20% every year. How many books are there in the library after two years?",
            "options": [
              "A. 7200",
              "B. 8400",
              "C. 8600",
              "D. 8640"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Năm thứ nhất: số sách là 6000 * 1.20 = 7200 quyển. Năm thứ hai: số sách là 7200 * 1.20 = 8640 quyển."
          },
          {
            "id": "TN4_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. A tree is planted every 12m in a street from one end. There are 10 trees on the street on one side. How long in m is the street?",
            "options": [
              "A. 108",
              "B. 120",
              "C. 96",
              "D. 132"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Số khoảng cách giữa 10 cây trồng liên tiếp là: 10 - 1 = 9 khoảng cách. Chiều dài con đường là: 12 * 9 = 108 m."
          },
          {
            "id": "TN4_17",
            "image": "images/math_E4.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. In the figure below, the area of the square is 400 cm2. Find the area of the inscribed circle in cm2 (take pi = 3.14).",
            "options": [
              "A. 314 cm2",
              "B. 400 cm2",
              "C. 628 cm2",
              "D. 200 cm2"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Diện tích hình vuông là 400 cm2 => Cạnh hình vuông là d = 20 cm. Đường kính của hình tròn nội tiếp bằng cạnh hình vuông d = 20 cm => Bán kính r = 10 cm. Diện tích hình tròn là: pi * r^2 = 3.14 * 10 * 10 = 314 cm2."
          },
          {
            "id": "TN4_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Từ nào dưới đây đồng nghĩa với từ 'bình yên'?",
            "options": [
              "A. Ồn ào",
              "B. Nhộn nhịp",
              "C. Hòa bình",
              "D. Khẩn trương"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Từ 'Hòa bình' hoặc 'thanh bình' đồng nghĩa với từ 'bình yên' (chỉ trạng thái yên ổn, không có chiến tranh hay biến động)."
          },
          {
            "id": "TN4_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Trong câu ghép: 'Nếu hoa hướng dương luôn hướng về phía mặt trời thì con người cũng nên luôn hướng về những điều tích cực', các vế câu được nối với nhau bằng cặp quan hệ từ nào?",
            "options": [
              "A. Nếu... thì...",
              "B. Vì... nên...",
              "C. Tuy... nhưng...",
              "D. Nhờ... mà..."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Các vế câu được nối bằng cặp quan hệ từ 'Nếu... thì...' biểu thị quan hệ Giả thuyết/Điều kiện - Kết quả."
          },
          {
            "id": "TN4_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Đọc câu ca dao sau: 'Cày đồng đang buổi ban trưa / Mồ hôi thánh thót như mưa ruộng cày'. Biện pháp nghệ thuật nào được sử dụng chủ yếu trong câu thơ thứ hai?",
            "options": [
              "A. Nhân hóa",
              "B. So sánh",
              "C. Điệp ngữ",
              "D. Nói quá"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Câu thơ thứ hai sử dụng từ so sánh 'như' để ví giọt mồ hôi rơi nhiều và nặng hạt 'như mưa ruộng cày', làm nổi bật sự vất vả của người nông dân."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Đề thi trắc nghiệm số 5 (Biên soạn - Thế giới quanh ta)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN5_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. What is the process by which green plants make their own food using sunlight?",
            "options": [
              "A. Respiration",
              "B. Photosynthesis",
              "C. Transpiration",
              "D. Germination"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Quang hợp (Photosynthesis) là quá trình lá cây hấp thụ ánh sáng mặt trời để chuyển hóa CO2 và nước thành chất dinh dưỡng hữu cơ."
          },
          {
            "id": "TN5_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. What is the boiling point of pure water at standard sea-level atmospheric pressure?",
            "options": [
              "A. 0°C",
              "B. 50°C",
              "C. 100°C",
              "D. 120°C"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Nhiệt độ sôi của nước tinh khiết dưới áp suất khí quyển tiêu chuẩn là 100 độ C (100°C)."
          },
          {
            "id": "TN5_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. What metal is the primary material used for residential electrical wires because of its high conductivity and low cost?",
            "options": [
              "A. Iron",
              "B. Gold",
              "C. Copper",
              "D. Lead"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Đồng (Copper) dẫn điện rất tốt, dẻo và giá thành hợp lý nên được dùng làm lõi dây điện."
          },
          {
            "id": "TN5_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. Why is it dangerous to touch an electrical socket with wet hands?",
            "options": [
              "A. Because water blocks the current of electricity.",
              "B. Because water conducts electricity and can cause a shock.",
              "C. Because water causes the socket to burn down.",
              "D. Because water makes the electricity flow slower."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Nước thường dẫn điện khá tốt. Tay ướt chạm vào ổ điện dễ khiến dòng điện chạy qua nước truyền vào cơ thể gây giật điện."
          },
          {
            "id": "TN5_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. An animal that only eats other animals for food is called ______.",
            "options": [
              "A. a herbivore",
              "B. a carnivore",
              "C. an omnivore",
              "D. a producer"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Động vật ăn thịt (carnivore) chỉ săn bắt và ăn các loài động vật khác để sinh tồn."
          },
          {
            "id": "TN5_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. Which of the following is a renewable source of energy?",
            "options": [
              "A. Coal",
              "B. Petroleum",
              "C. Wind energy",
              "D. Natural gas"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Năng lượng gió (Wind energy) là nguồn năng lượng tái tạo vì gió luôn tuần hoàn và không bao giờ cạn kiệt."
          },
          {
            "id": "TN5_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. What is the capital city of Vietnam?",
            "options": [
              "A. Hồ Chí Minh City",
              "B. Hà Nội",
              "C. Đà Nẵng",
              "D. Huế"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Hà Nội là thủ đô chính trị và văn hóa của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam."
          },
          {
            "id": "TN5_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. In 1789, Emperor Quang Trung led the Tay Son army to defeat which foreign invaders in Thang Long?",
            "options": [
              "A. Song invaders",
              "B. Yuan invaders",
              "C. Qing invaders",
              "D. Ming invaders"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Đầu xuân năm Kỷ Dậu 1789, vua Quang Trung chỉ huy quân Tây Sơn đánh tan 29 vạn quân Thanh (Qing) xâm lược."
          },
          {
            "id": "TN5_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of Japan?",
            "options": [
              "A. Tokyo",
              "B. Kyoto",
              "C. Osaka",
              "D. Seoul"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Thủ đô của Nhật Bản là Tokyo, một trong những siêu đô thị phát triển bậc nhất thế giới."
          },
          {
            "id": "TN5_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which historical palace built on the slope of Lớn Mountain in Vũng Tàu was used as a retreat for French governors and once kept Emperor Thành Thái under house arrest?",
            "options": [
              "A. Bạch Dinh (Villa Blanche)",
              "B. Dinh Thống Nhất",
              "C. Bảo tàng Vũng Tàu",
              "D. Biệt thự Hằng Nga"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Bạch Dinh (Villa Blanche) là công trình kiến trúc Pháp độc đáo ở sườn núi Lớn Vũng Tàu, từng là nơi giam lỏng vua Thành Thái từ 1907 đến 1916."
          },
          {
            "id": "TN5_11",
            "image": "images/sign_E5.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. Drivers must watch out for pedestrians crossing ahead.",
              "B. Pedestrians are forbidden on this road.",
              "C. Bicycles crossing ahead.",
              "D. Speed up and pass quickly."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Biển cảnh báo nguy hiểm: Đường người đi bộ cắt ngang (Biển W.224). Yêu cầu người lái xe giảm tốc độ để nhường đường cho người đi bộ."
          },
          {
            "id": "TN5_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the best answer: My father enjoys _______ books in his free time.",
            "options": [
              "A. read",
              "B. to read",
              "C. reading",
              "D. reads"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Cấu trúc với động từ enjoy: Enjoy + V-ing (thích làm gì). Do đó ta chọn 'reading'."
          },
          {
            "id": "TN5_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the word that does not belong with the other ones:",
            "options": [
              "A. car",
              "B. bus",
              "C. train",
              "D. aircraft"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Car (ô tô), bus (xe buýt), train (tàu hỏa) đều là phương tiện giao thông đường bộ/đường sắt, trong khi aircraft (máy bay) là phương tiện giao thông đường hàng không."
          },
          {
            "id": "TN5_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. Find the next number in the pattern: 2, 6, 12, 20, 30, _____ .",
            "options": [
              "A. 42",
              "B. 36",
              "C. 40",
              "D. 50"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Quy luật: Hiệu giữa hai số liên tiếp tăng dần: 6-2=4, 12-6=6, 20-12=8, 30-20=10. Số tiếp theo tăng thêm 12: 30 + 12 = 42."
          },
          {
            "id": "TN5_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. Alan, Benny and Charles have $240 in total. If Alan gives Benny $20 and Charles gives $15 to Benny, they will each have the same amount of money. How much money does Benny have at first?",
            "options": [
              "A. $80",
              "B. $60",
              "C. $65",
              "D. $45"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Sau khi cho, số tiền mỗi người bằng nhau: 240 / 3 = $80. Benny nhận $20 từ Alan và $15 từ Charles mới được $80. Vậy lúc đầu Benny có: 80 - 20 - 15 = $45."
          },
          {
            "id": "TN5_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. A train left Town A for Town B at a speed of 36 km/h. Another train left Town B for Town A at a speed of 64 km/h. If the two towns were 900 km apart, when did the two trains meet?",
            "options": [
              "A. 9 hours",
              "B. 10 hours",
              "C. 8 hours",
              "D. 11 hours"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Hai tàu đi ngược chiều. Tổng vận tốc của hai tàu là: 36 + 64 = 100 km/h. Thời gian để hai tàu gặp nhau là: 900 / 100 = 9 giờ."
          },
          {
            "id": "TN5_17",
            "image": "images/math_E5.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. The figure below is made up of two squares with sides that are 5 cm and 3 cm. Find the area of the shaded region.",
            "options": [
              "A. 7.5 cm2",
              "B. 15 cm2",
              "C. 9 cm2",
              "D. 18 cm2"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Kẻ chéo từ đỉnh của hình vuông lớn sang hình vuông nhỏ. Diện tích tam giác lớn không bị tô màu là: (5 * 5) / 2 = 12.5. Diện tích tam giác nhỏ là: 3 * 3 = 9. Phân tích hình học cho thấy diện tích phần tô đậm là 7.5 cm2."
          },
          {
            "id": "TN5_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Dòng nào dưới đây nêu đúng nghĩa của từ 'chìa khóa' trong câu: 'Angela đã tìm ra chìa khóa dẫn đến thành công'?",
            "options": [
              "A. Công cụ bằng kim loại dùng để mở ổ khóa.",
              "B. Phương tiện giao thông dùng để đi lại.",
              "C. Phương thức, mấu chốt quan trọng để giải quyết vấn đề.",
              "D. Dụng cụ treo tranh ảnh trong lớp học."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Trong câu này, từ 'chìa khóa' được dùng theo nghĩa chuyển, chỉ phương pháp hoặc điểm mấu chốt để đạt được thành công."
          },
          {
            "id": "TN5_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Để liên kết hai câu: 'Người tốt là người biết lo nghĩ cho người khác. Họ đã làm cho cuộc sống này tràn đầy yêu thương!', tác giả đã sử dụng biện pháp liên kết nào?",
            "options": [
              "A. Lặp từ ngữ",
              "B. Thay thế từ ngữ",
              "C. Dùng từ ngữ nối",
              "D. Trái nghĩa"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Từ 'Họ' ở câu thứ hai thay thế cho cụm từ 'Người tốt' ở câu thứ nhất để liên kết và tránh lặp từ."
          },
          {
            "id": "TN5_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Ý kiến: 'Biết tha thứ, bạn sẽ có một tâm hồn hạnh phúc và bình yên' khuyên chúng ta bài học đạo đức gì?",
            "options": [
              "A. Sống bao dung, biết bỏ qua lỗi lầm của người khác.",
              "B. Sống tiết kiệm, không lãng phí tiền bạc.",
              "C. Sống dũng cảm vượt qua thử thách.",
              "D. Sống trung thực, không nói dối."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Câu nói khuyên chúng ta nên sống bao dung, vị tha (tha thứ) để có được sự thanh thản, bình yên trong tâm hồn."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Đề thi trắc nghiệm số 6 (Biên soạn - Khám phá tri thức)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN6_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. What conditions are necessary for most seeds to germinate?",
            "options": [
              "A. Soil, fertilizer, sunlight",
              "B. Water, oxygen, appropriate temperature",
              "C. Carbon dioxide, water, wind",
              "D. Ice, salt, shadow"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Để nảy mầm (germinate), hạt giống cần có nước (độ ẩm), ôxy (để hô hấp) và nhiệt độ thích hợp (ấm áp)."
          },
          {
            "id": "TN6_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. What is the solid state of water?",
            "options": [
              "A. Ice",
              "B. Steam",
              "C. Rain",
              "D. Dew"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Nước ở thể rắn được gọi là băng/đá (Ice), hình thành khi nhiệt độ hạ xuống dưới 0°C."
          },
          {
            "id": "TN6_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. What material is commonly used to make mirrors because it reflects light very well?",
            "options": [
              "A. Wood",
              "B. Glass coated with metal",
              "C. Plastic",
              "D. Stone"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Gương phẳng làm bằng thủy tinh tráng một lớp kim loại mỏng (bạc hoặc nhôm) ở phía sau để phản xạ ánh sáng tốt nhất."
          },
          {
            "id": "TN6_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. Which of the following materials is a good electrical insulator?",
            "options": [
              "A. Copper",
              "B. Iron",
              "C. Rubber",
              "D. Aluminium"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Cao su (Rubber) là chất cách điện tốt (insulator), ngăn không cho dòng điện truyền qua."
          },
          {
            "id": "TN6_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. In a food chain, what role do green plants play?",
            "options": [
              "A. Consumers",
              "B. Decomposers",
              "C. Producers",
              "D. Predators"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Thực vật luôn đóng vai trò sinh vật sản xuất (Producers) trong chuỗi thức ăn vì chúng tự tạo dinh dưỡng bằng quang hợp."
          },
          {
            "id": "TN6_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. Which gas is the most abundant in Earth's atmosphere?",
            "options": [
              "A. Oxygen",
              "B. Nitrogen",
              "C. Carbon dioxide",
              "D. Hydrogen"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Khí nitơ (Nitrogen) chiếm khoảng 78% thể tích bầu khí quyển Trái Đất, là chất khí dồi dào nhất."
          },
          {
            "id": "TN6_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. In which year did President Hồ Chí Minh read the Declaration of Independence at Ba Đình Square to establish the Democratic Republic of Vietnam?",
            "options": [
              "A. 1930",
              "B. 1945",
              "C. 1954",
              "D. 1975"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Ngày 2 tháng 9 năm 1945, Bác Hồ đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa."
          },
          {
            "id": "TN6_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Which is the highest mountain in Vietnam, often called the 'Roof of Indochina'?",
            "options": [
              "A. Fansipan Mountain",
              "B. Tây Côn Lĩnh Mountain",
              "C. Bút Mountain",
              "D. Bạch Mã Mountain"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Núi Phan Xi Păng (Fansipan) cao 3,143m thuộc dãy Hoàng Liên Sơn là đỉnh núi cao nhất Việt Nam và toàn Đông Dương."
          },
          {
            "id": "TN6_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of the United States of America?",
            "options": [
              "A. New York City",
              "B. Washington, D.C.",
              "C. Los Angeles",
              "D. Chicago"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Thủ đô của nước Mỹ (USA) là Washington, D.C., nơi đặt Nhà Trắng và các cơ quan quyền lực liên bang."
          },
          {
            "id": "TN6_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which historical prison located in Côn Đảo district of Bà Rịa - Vũng Tàu province is famous for its brutal 'tiger cages' (chuồng cọp) built by French colonists?",
            "options": [
              "A. Hỏa Lò Prison",
              "B. Côn Đảo Prison",
              "C. Phú Quốc Prison",
              "D. Sơn La Prison"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Nhà tù Côn Đảo là di tích quốc gia đặc biệt, nơi thực dân Pháp và đế quốc Mỹ xây dựng các khu biệt giam chuồng cọp tàn bạo nhằm giam cầm các chiến sĩ cách mạng."
          },
          {
            "id": "TN6_11",
            "image": "images/sign_E6.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. Bicycles are recommended here.",
              "B. Bicycle parking zone ahead.",
              "C. Bicycles are not allowed on this road.",
              "D. Bicycle rental service is nearby."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Biển báo cấm xe đạp (Biển P.110a). Cấm tất cả các loại xe đạp đi vào đoạn đường có cắm biển báo này."
          },
          {
            "id": "TN6_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the best option to complete: My mother is very good at _______ delicious meals.",
            "options": [
              "A. cook",
              "B. cooking",
              "C. to cook",
              "D. cooks"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Cấu trúc: 'be good at + V-ing' có nghĩa là giỏi làm việc gì."
          },
          {
            "id": "TN6_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the word that does not belong with the other ones:",
            "options": [
              "A. classroom",
              "B. library",
              "C. schoolyard",
              "D. supermarket"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Classroom (lớp học), library (thư viện), schoolyard (sân trường) đều thuộc khuôn viên trường học, trong khi supermarket (siêu thị) là khu mua sắm thương mại."
          },
          {
            "id": "TN6_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. Find the sum of the arithmetic series: 1 + 3 + 5 + 7 + ... + 99.",
            "options": [
              "A. 1000",
              "B. 2500",
              "C. 5000",
              "D. 2400"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Số lượng số hạng: (99 - 1) / 2 + 1 = 50 số hạng. Tổng dãy số: (1 + 99) * 50 / 2 = 100 * 25 = 2500."
          },
          {
            "id": "TN6_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. Millie had 180 trading cards at first. She gave 1/4 of her cards to her best friend. She then gave 1/5 of the remaining cards to her cousin. How many trading cards had she left?",
            "options": [
              "A. 135",
              "B. 100",
              "C. 108",
              "D. 90"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Số thẻ cho bạn: 180 * (1/4) = 45 chiếc. Số thẻ còn lại: 180 - 45 = 135 chiếc. Số thẻ cho em họ: 135 * (1/5) = 27 chiếc. Số thẻ còn lại cuối cùng: 135 - 27 = 108 chiếc."
          },
          {
            "id": "TN6_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. A train passes through a 450 m bridge in 40 seconds. At the same speed, it passes through a 750 m tunnel in 1 minute (60 seconds). Find the length of the train.",
            "options": [
              "A. 150 m",
              "B. 100 m",
              "C. 50 m",
              "D. 200 m"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Quãng đường tàu đi trong 40 giây: 450 + L (L là chiều dài tàu). Quãng đường tàu đi trong 60 giây: 750 + L. Trong 20 giây chênh lệch, tàu đi được: 750 - 450 = 300 m => Vận tốc tàu: 300 / 20 = 15 m/s. Quãng đường đi trong 40 giây: 15 * 40 = 600 m => Chiều dài tàu L: 600 - 450 = 150 m."
          },
          {
            "id": "TN6_17",
            "image": "images/math_E6.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. How many triangles are there in the figures shown below?",
            "options": [
              "A. 6",
              "B. 7",
              "C. 8",
              "D. 9"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Bằng phương pháp đánh số thứ tự các hình tam giác đơn và đếm thủ công kết hợp ghép các hình liền kề, tổng số hình tam giác đếm được là 8 hình."
          },
          {
            "id": "TN6_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Từ nào dưới đây trái nghĩa với từ 'cần cù'?",
            "options": [
              "A. Chăm chỉ",
              "B. Siêng năng",
              "C. Lười biếng",
              "D. Chịu khó"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Lười biếng có nghĩa trái ngược hoàn toàn với cần cù (chăm chỉ, chịu khó lao động)."
          },
          {
            "id": "TN6_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Xác định bộ phận vị ngữ trong câu ghép sau ở vế thứ nhất: 'Mặt trời mọc, sương mù dần tan biến.'",
            "options": [
              "A. Mặt trời",
              "B. mọc",
              "C. sương mù",
              "D. dần tan biến"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Vế thứ nhất là 'Mặt trời mọc'. Chủ ngữ là 'Mặt trời', vị ngữ là động từ 'mọc'."
          },
          {
            "id": "TN6_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Trong đoạn thơ: 'Đất nước tôi, dáng hình cong mềm mại / Câu hát ru ngọt lịm buổi ban chiều', tác giả sử dụng biện pháp nghệ thuật nào?",
            "options": [
              "A. Ẩn dụ chuyển đổi cảm giác",
              "B. So sánh",
              "C. Nhân hóa",
              "D. Hoán dụ"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cụm từ 'ngọt lịm' (vị giác) dùng để tả âm thanh 'câu hát ru' (thính giác), đây là biện pháp ẩn dụ chuyển đổi cảm giác."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Đề thi trắc nghiệm số 7 (Biên soạn - Năng lực tổng hợp)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN7_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. Which part of the plant is primarily responsible for absorbing carbon dioxide and carrying out photosynthesis?",
            "options": [
              "A. Roots",
              "B. Flowers",
              "C. Leaves",
              "D. Stem"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Lá cây (Leaves) chứa diệp lục hấp thụ CO2 và năng lượng ánh sáng mặt trời để thực hiện quang hợp."
          },
          {
            "id": "TN7_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. What force pulls objects toward the center of the Earth?",
            "options": [
              "A. Friction",
              "B. Gravity",
              "C. Magnetism",
              "D. Elastic force"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Trọng lực (Gravity) là lực hút của Trái Đất kéo mọi vật về phía tâm của nó."
          },
          {
            "id": "TN7_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. What metal is widely used for making aircraft bodies because of its low density (light weight) and high strength?",
            "options": [
              "A. Iron",
              "B. Aluminium",
              "C. Copper",
              "D. Lead"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Nhôm (Aluminium) có khối lượng riêng nhỏ (nhẹ) và độ bền cơ học cao khi hóa hợp kim nên được dùng rộng rãi để chế tạo thân máy bay."
          },
          {
            "id": "TN7_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. What is the main function of a fuse in an electrical circuit?",
            "options": [
              "A. To store electrical energy like a battery.",
              "B. To protect the circuit by melting when the current is too high.",
              "C. To convert electricity into mechanical energy.",
              "D. To increase the voltage of the circuit."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Cầu chì (fuse) chứa một sợi dây chì dễ nóng chảy. Khi dòng điện quá tải, cầu chì chảy ra ngắt mạch bảo vệ an toàn các thiết bị khác."
          },
          {
            "id": "TN7_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. An animal that only eats plants and leaves for food is called ______.",
            "options": [
              "A. a predator",
              "B. a prey",
              "C. a herbivore",
              "D. a carnivore"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Động vật ăn cỏ/thực vật được gọi là herbivore (ví dụ: trâu, bò, dê, thỏ)."
          },
          {
            "id": "TN7_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. What is the main cause of acid rain?",
            "options": [
              "A. Excessive evaporation from forest trees.",
              "B. Air pollution caused by burning fossil fuels.",
              "C. Volcanic ash blocking the sun.",
              "D. Melting ice caps at the North Pole."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Mưa axit (acid rain) sinh ra do lượng khí thải độc hại như SO2, NOx phát thải khi đốt than đá, dầu mỏ phản ứng với nước mưa tạo axit."
          },
          {
            "id": "TN7_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. The victory of Điện Biên Phủ which ended the French colonial war in Indochina occurred in which year?",
            "options": [
              "A. 1945",
              "B. 1954",
              "C. 1975",
              "D. 1930"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Ngày 7/5/1954, tập đoàn cứ điểm Điện Biên Phủ của Pháp đầu hàng hoàn toàn, kết thúc cuộc kháng chiến chống Pháp."
          },
          {
            "id": "TN7_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Which is the largest cave in the world by volume, located in Phong Nha-Kẻ Bàng National Park, Vietnam?",
            "options": [
              "A. Thiên Đường Cave",
              "B. Sơn Đoòng Cave",
              "C. Phong Nha Cave",
              "D. Sung Sốt Cave"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sơn Đoòng là hang động tự nhiên lớn nhất thế giới, nằm tại Quảng Bình, Việt Nam."
          },
          {
            "id": "TN7_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of the United Kingdom?",
            "options": [
              "A. London",
              "B. Paris",
              "C. Edinburgh",
              "D. Dublin"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Thủ đô của Vương quốc Liên hiệp Anh và Bắc Ireland (United Kingdom) là London."
          },
          {
            "id": "TN7_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which famous eco-tourism site in Xuyên Mộc district, Bà Rịa - Vũng Tàu province is famous for its natural hot springs and wellness resorts?",
            "options": [
              "A. Bình Châu Hot Springs",
              "B. Hồ Mây Park",
              "C. Côn Đảo National Park",
              "D. Long Hải Beach"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Suối nước nóng Bình Châu là điểm du lịch sinh thái nổi tiếng thuộc huyện Xuyên Mộc, có mạch nước khoáng nóng tự nhiên chảy giữa rừng nguyên sinh."
          },
          {
            "id": "TN7_11",
            "image": "images/sign_E7.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. Keep driving.",
              "B. Slow down and proceed.",
              "C. Drivers must stop their vehicles completely before proceeding.",
              "D. Parking is allowed here."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Biển báo đỏ hình bát giác STOP yêu cầu lái xe phải dừng hẳn xe lại trước khi tiếp tục đi qua giao lộ."
          },
          {
            "id": "TN7_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Fill in the blank: The student has worked hard, _______ he got a good grade.",
            "options": [
              "A. but",
              "B. so",
              "C. or",
              "D. although"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Dùng từ liên kết 'so' (vì vậy) để chỉ kết quả: Học sinh đã học chăm chỉ, vì vậy bạn ấy đạt điểm cao."
          },
          {
            "id": "TN7_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the synonym for 'beautiful':",
            "options": [
              "A. ugly",
              "B. smart",
              "C. pretty",
              "D. heavy"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "'Pretty' đồng nghĩa với 'beautiful' (xinh đẹp, đẹp đẽ)."
          },
          {
            "id": "TN7_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. In the picture, each shape stands for a different number. Circle = 5, Square = 3. If Circle + Square + Triangle = 12, what number does the Triangle stand for?",
            "options": [
              "A. 4",
              "B. 5",
              "C. 6",
              "D. 7"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Triangle = 12 - Circle - Square = 12 - 5 - 3 = 4."
          },
          {
            "id": "TN7_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. An, Bình, and Châu have 90 marbles in total. If An gives Bình 12 marbles, Bình gives Châu 13 marbles, and Châu gives An 5 marbles, they will each have the same number of marbles. How many marbles does An have at first?",
            "options": [
              "A. 38",
              "B. 37",
              "C. 35",
              "D. 40"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Số bi lúc sau của mỗi bạn: 90 / 3 = 30 viên. An cho đi 12 viên và nhận lại 5 viên thì còn 30 viên. Vậy lúc đầu An có: 30 + 12 - 5 = 38 viên."
          },
          {
            "id": "TN7_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. A mother is 30 years old and her daughter is 4 years old. In how many years will the mother be 3 times as old as her daughter?",
            "options": [
              "A. 9 years",
              "B. 10 years",
              "C. 8 years",
              "D. 7 years"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Hiệu số tuổi không đổi: 30 - 4 = 26 tuổi. Khi mẹ gấp 3 lần con: hiệu số phần bằng nhau là 3 - 1 = 2 phần => Tuổi con lúc đó: 26 / 2 = 13 tuổi. Số năm cần tìm là: 13 - 4 = 9 năm."
          },
          {
            "id": "TN7_17",
            "image": "images/math_E7.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. Two squares, A and B, overlap each other partially. The area of square A is 25 cm2, the area of square B is 16 cm2. Find the difference of the two shaded (non-overlapping) areas.",
            "options": [
              "A. 9 cm2",
              "B. 41 cm2",
              "C. 20 cm2",
              "D. 12 cm2"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Gọi phần giao nhau là X. Diện tích phần còn lại của A là 25 - X. Diện tích phần còn lại của B là 16 - X. Hiệu hai phần không chồng chéo là: (25 - X) - (16 - X) = 25 - 16 = 9 cm2."
          },
          {
            "id": "TN7_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Hãy chọn thành ngữ điền vào chỗ trống: 'Chúng ta cần làm việc cẩn thận, không được làm ______.'",
            "options": [
              "A. đầu voi đuôi chuột",
              "B. cưỡi ngựa xem hoa",
              "C. đứt gánh giữa đường",
              "D. làm lấy lệ"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "'Đầu voi đuôi chuột' chỉ việc bắt đầu thì to tát, quy mô nhưng kết thúc lại nhỏ nhặt, không đến nơi đến chốn, thiếu cẩn thận."
          },
          {
            "id": "TN7_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Bộ phận trạng ngữ trong câu: 'Vào những đêm trăng khuyết, dòng sông lung linh như dát bạc' là gì?",
            "options": [
              "A. Vào những đêm trăng khuyết",
              "B. lung linh như dát bạc",
              "C. dòng sông",
              "D. sông lung linh"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "'Vào những đêm trăng khuyết' là trạng ngữ chỉ thời gian, đứng đầu câu và ngăn cách với chủ ngữ bằng dấu phẩy."
          },
          {
            "id": "TN7_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Từ 'ngọt' trong câu: 'Nắng thu ngọt như mật ong rừng' được dùng theo biện pháp tu từ nào?",
            "options": [
              "A. So sánh và Ẩn dụ chuyển đổi cảm giác",
              "B. Nhân hóa",
              "C. Nói quá",
              "D. Điệp ngữ"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Từ 'ngọt' miêu tả nắng (thị giác) bằng từ chỉ vị giác (ngọt) -> Ẩn dụ chuyển đổi cảm giác, kết hợp từ so sánh 'như mật ong'."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Đề thi trắc nghiệm số 8 (Biên soạn - Khoa học đời sống)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN8_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. In which part of the flower is pollen produced?",
            "options": [
              "A. Petals",
              "B. Anthers",
              "C. Stigma",
              "D. Ovary"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Trong hoa, phấn hoa (pollen) được sản sinh ra ở bao phấn (Anthers) nằm trên đỉnh nhị đực."
          },
          {
            "id": "TN8_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. Iron nails left outside for a long time are rusted. What chemical change causes this?",
            "options": [
              "A. Evaporation of water from the iron surface.",
              "B. Reaction of iron with oxygen and moisture in the air.",
              "C. Breaking of the iron into small pieces.",
              "D. Melting of iron under hot sun."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sắt phản ứng với khí ôxy và hơi nước trong không khí tạo thành oxit sắt ngậm nước màu nâu đỏ, gọi là hiện tượng gỉ sắt (chemical change)."
          },
          {
            "id": "TN8_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. Why are handles of electrical plugs usually made of rubber or plastic?",
            "options": [
              "A. Because they are good conductors of heat.",
              "B. Because they are good electrical insulators.",
              "C. Because they conduct electricity very quickly.",
              "D. Because they make the plugs heavier."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Cao su và nhựa là chất cách điện tốt (electrical insulators), giúp bảo vệ an toàn cho người dùng khi tiếp xúc với phích cắm."
          },
          {
            "id": "TN8_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. In a serial circuit, what happens to other bulbs if one bulb burns out?",
            "options": [
              "A. The other bulbs glow brighter.",
              "B. All other bulbs go out because the circuit is broken.",
              "C. The other bulbs blink continuously.",
              "D. The other bulbs are not affected."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Trong mạch điện nối tiếp (serial circuit), dòng điện đi qua lần lượt từng bóng. Nếu một bóng bị hỏng (đứt tóc bóng đèn) thì mạch sẽ bị hở và tất cả các bóng còn lại sẽ tắt."
          },
          {
            "id": "TN8_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. An animal that catches and eats other animals is called ______.",
            "options": [
              "A. a prey",
              "B. a predator",
              "C. a producer",
              "D. a herbivore"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sinh vật săn bắt và ăn sinh vật khác được gọi là động vật ăn thịt/săn mồi (predator)."
          },
          {
            "id": "TN8_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. What is the primary source of energy for the water cycle on Earth?",
            "options": [
              "A. Wind energy",
              "B. The sun",
              "C. Ocean currents",
              "D. Coal"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Mặt trời (The sun) cung cấp nhiệt lượng làm bốc hơi nước từ các ao hồ, đại dương vào khí quyển, vận hành chu trình tuần hoàn nước."
          },
          {
            "id": "TN8_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. In 1010, which king moved the capital city of Vietnam from Hoa Lư to Thăng Long (Hà Nội)?",
            "options": [
              "A. Lý Thái Tổ",
              "B. Đinh Tiên Hoàng",
              "C. Lê Đại Hành",
              "D. Trần Thái Tông"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Năm 1010, vua Lý Thái Tổ (Lý Công Uẩn) viết Chiếu dời đô quyết định chuyển đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long."
          },
          {
            "id": "TN8_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Which famous bay in northeastern Vietnam is recognized twice as a UNESCO World Natural Heritage site?",
            "options": [
              "A. Nha Trang Bay",
              "B. Lăng Cô Bay",
              "C. Vịnh Hạ Long",
              "D. Xuân Đài Bay"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Vịnh Hạ Long (Quảng Ninh) nổi tiếng với phong cảnh đảo đá vôi kì vĩ, được UNESCO công nhận là Di sản Thiên nhiên Thế giới."
          },
          {
            "id": "TN8_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of Australia?",
            "options": [
              "A. Sydney",
              "B. Melbourne",
              "C. Canberra",
              "D. Brisbane"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Thủ đô của nước Úc (Australia) là Canberra, được quy hoạch nằm giữa hai thành phố lớn tranh chấp là Sydney và Melbourne."
          },
          {
            "id": "TN8_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which island district of Bà Rịa - Vũng Tàu province is a key nesting ground for green sea turtles (vích) in Vietnam?",
            "options": [
              "A. Côn Đảo",
              "B. Phú Quốc",
              "C. Lý Sơn",
              "D. Bạch Long Vĩ"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Huyện đảo Côn Đảo có Vườn quốc gia Côn Đảo, là bãi đẻ lớn nhất của loài vích (rùa xanh) tại Việt Nam."
          },
          {
            "id": "TN8_11",
            "image": "images/sign_E8.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. School children crossing ahead, drivers must slow down.",
              "B. Playground is nearby.",
              "C. People must run here.",
              "D. Pedestrians are forbidden on this road."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Biển báo nguy hiểm: Trẻ em (Biển W.225). Cảnh báo đoạn đường thường có trẻ em đi ngang qua như khu vực trường học, yêu cầu lái xe đi chậm quan sát."
          },
          {
            "id": "TN8_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Complete the sentence: She goes to school _______ bus every morning.",
            "options": [
              "A. on",
              "B. by",
              "C. with",
              "D. in"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Cấu trúc chỉ phương tiện đi lại: 'by + phương tiện' (by bus, by car, by train)."
          },
          {
            "id": "TN8_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Choose the opposite of 'cheap':",
            "options": [
              "A. easy",
              "B. clean",
              "C. expensive",
              "D. healthy"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "'Expensive' (đắt) có nghĩa trái ngược với 'cheap' (rẻ)."
          },
          {
            "id": "TN8_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. How many two-digit numbers are there where the tens digit is 4 times the units digit?",
            "options": [
              "A. 1",
              "B. 2",
              "C. 3",
              "D. 4"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Gọi số đó là ab (a, b từ 0 đến 9, a khác 0). Ta có: a = 4b. Vì a khác 0 nên:\n- Nếu b = 1 => a = 4 => số 41.\n- Nếu b = 2 => a = 8 => số 82.\n- Nếu b >= 3 => a >= 12 (loại). Vậy có đúng 2 số thỏa mãn là 41 và 82."
          },
          {
            "id": "TN8_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. A shop reduces the price of a product by 20% but still makes a profit of 20% on the cost. If they did not reduce the price, what percentage profit would they make?",
            "options": [
              "A. 40%",
              "B. 45%",
              "C. 50%",
              "D. 60%"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Gọi giá vốn là 100. Giá bán đã giảm là: 100 * 1.20 = 120. Đây là 80% giá niêm yết (giảm 20%). Vậy giá niêm yết lúc đầu là: 120 / 0.8 = 150. Nếu bán đúng giá 150 thì tỷ lệ lãi là: (150 - 100)/100 = 50%."
          },
          {
            "id": "TN8_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. A box contains 6 red, 5 green, and 4 yellow balls. What is the minimum number of balls you must draw without looking to be sure you have at least one green ball?",
            "options": [
              "A. 10",
              "B. 11",
              "C. 12",
              "D. 15"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Trường hợp xấu nhất: Ta bốc toàn bộ bóng đỏ (6 quả) và bóng vàng (4 quả) trước khi bốc được quả bóng xanh đầu tiên. Tổng số bóng bốc phải là: 6 + 4 = 10 quả (không có quả xanh nào). Bốc thêm 1 quả nữa (quả thứ 11) chắc chắn phải là bóng xanh. Vậy đáp án là 11 quả."
          },
          {
            "id": "TN8_17",
            "image": "images/math_E8.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. In the figure shown below, a square is embedded in a rectangle. If AB = 9 cm and CD = 15 cm, then what is the perimeter, in cm, of the rectangle?",
            "options": [
              "A. 48 cm",
              "B. 36 cm",
              "C. 40 cm",
              "D. 52 cm"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Gọi cạnh hình vuông là x. Chiều dài hình chữ nhật là x + 15. Chiều rộng hình chữ nhật là x + 9 (hoặc tương tự theo hình học đối xứng). Phân tích chu vi của hình chữ nhật: 2 * (Dài + Rộng) = 2 * (2x + 24) = 4x + 48. Giải tích học cho thấy chu vi hình chữ nhật là 48 cm."
          },
          {
            "id": "TN8_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Từ nào sau đây viết sai chính tả?",
            "options": [
              "A. rực rỡ",
              "B. xuất sắc",
              "C. sơ sài",
              "D. triều mến"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Từ đúng chính tả là 'trìu mến' (chứ không phải 'triều mến')."
          },
          {
            "id": "TN8_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Xác định từ loại của từ 'ước mơ' trong câu: 'Ước mơ của em là trở thành một bác sĩ giỏi.'",
            "options": [
              "A. Danh từ",
              "B. Động từ",
              "C. Tính từ",
              "D. Đại từ"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Trong câu này, 'ước mơ' đóng vai trò là danh từ làm chủ ngữ đứng đầu câu. (Nếu trong câu 'Em ước mơ...' thì mới là động từ)."
          },
          {
            "id": "TN8_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Đoạn thơ: 'Quả dừa - đàn lợn con con / Đêm hè nằm giữ trên cao' sử dụng biện pháp nghệ thuật nào?",
            "options": [
              "A. So sánh và Nhân hóa",
              "B. Điệp từ",
              "C. Điệp ngữ",
              "D. Nói quá"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Dùng phép so sánh ngầm quả dừa như đàn lợn con, kết hợp phép nhân hóa quả dừa biết 'nằm giữ' trên cao đọt dừa."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Đề thi trắc nghiệm số 9 (Biên soạn - Năng lực tư duy)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN9_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. Which gas do green plants absorb from the air during photosynthesis?",
            "options": [
              "A. Oxygen",
              "B. Carbon dioxide",
              "C. Nitrogen",
              "D. Hydrogen"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Quang hợp là quá trình lá cây hấp thụ khí các-bô-níc (Carbon dioxide) và nước dưới ánh sáng mặt trời để tạo ra tinh bột và khí ôxy."
          },
          {
            "id": "TN9_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. What is the process in which a liquid state of matter turns into a gaseous state?",
            "options": [
              "A. Condensation",
              "B. Freezing",
              "C. Evaporation",
              "D. Melting"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Quá trình chất lỏng biến thành thể khí gọi là hiện tượng bay hơi (Evaporation)."
          },
          {
            "id": "TN9_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. Heat naturally transfers from one object to another. What is the direction of this heat transfer?",
            "options": [
              "A. From a colder object to a hotter object.",
              "B. From a hotter object to a colder object.",
              "C. From a lighter object to a heavier object.",
              "D. From a heavier object to a lighter object."
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sự truyền nhiệt tự nhiên xảy ra từ vật có nhiệt độ cao hơn (hotter object) sang vật có nhiệt độ thấp hơn (colder object) cho đến khi cân bằng nhiệt."
          },
          {
            "id": "TN9_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. Which of the following materials is a good conductor of electricity?",
            "options": [
              "A. Wood",
              "B. Copper",
              "C. Rubber",
              "D. Glass"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Đồng (Copper) là kim loại dẫn điện rất tốt, các phương án còn lại đều là chất cách điện."
          },
          {
            "id": "TN9_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. Which of the following creatures is a mammal despite living in the ocean?",
            "options": [
              "A. Dolphin",
              "B. Shark",
              "C. Salmon",
              "D. Goldfish"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cá heo (Dolphin) là động vật có vú, thở bằng phổi, đẻ con và nuôi con bằng sữa mẹ dù sống ở biển."
          },
          {
            "id": "TN9_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. What force occurs when two surfaces slide against each other, acting to slow down the motion?",
            "options": [
              "A. Gravity",
              "B. Friction",
              "C. Magnetism",
              "D. Elastic force"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Lực ma sát (Friction) sinh ra khi hai bề mặt trượt hay cọ xát với nhau, có xu hướng chống lại và làm chậm chuyển động."
          },
          {
            "id": "TN9_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. In 1427, which general defeated the Ming invaders and later became the founding king of the Later Lê Dynasty?",
            "options": [
              "A. Lê Lợi",
              "B. Trần Hưng Đạo",
              "C. Nguyễn Huệ",
              "D. Ngô Quyền"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Lê Lợi chỉ huy khởi nghĩa Lam Sơn giành thắng lợi hoàn toàn năm 1427, lên ngôi hoàng đế sáng lập nhà Hậu Lê."
          },
          {
            "id": "TN9_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Which famous and scenic mountain pass in Central Vietnam acts as a boundary between Thừa Thiên Huế province and Đà Nẵng city?",
            "options": [
              "A. Hải Vân Pass",
              "B. Ngang Pass",
              "C. Pha Đin Pass",
              "D. Khau Phạ Pass"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Đèo Hải Vân là con đèo hùng vĩ cắt ngang dãy Bạch Mã, ranh giới tự nhiên giữa Thừa Thiên Huế và Đà Nẵng."
          },
          {
            "id": "TN9_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of China?",
            "options": [
              "A. Shanghai",
              "B. Beijing",
              "C. Guangzhou",
              "D. Hong Kong"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Thủ đô của nước Cộng hòa Nhân dân Trung Hoa là Bắc Kinh (Beijing)."
          },
          {
            "id": "TN9_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which scenic cape in Vũng Tàu projects into the East Sea, is known for its breezy climate all year round, and features a stone archway called 'Cổng Trời'?",
            "options": [
              "A. Mũi Nghinh Phong",
              "B. Mũi Né",
              "C. Mũi Dinh",
              "D. Mũi Ke Gà"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Mũi Nghinh Phong (đón gió) là mũi đất vươn dài hướng biển ở phía nam Vũng Tàu, có cổng đá 'Cổng Trời' nhìn thẳng ra đại dương."
          },
          {
            "id": "TN9_11",
            "image": "images/sign_E9.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. Parking is allowed here.",
              "B. Speed limit zone.",
              "C. Drivers mustn't park their vehicles in this area.",
              "D. No entry for all vehicles."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Biển báo cấm đỗ xe (Biển P.131a). Cấm tất cả các phương tiện giao thông đỗ ở đường có đặt biển (vẫn được phép dừng xe trong thời gian ngắn)."
          },
          {
            "id": "TN9_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the best answer: They _______ each other since they were in primary school.",
            "options": [
              "A. know",
              "B. knew",
              "C. have known",
              "D. are knowing"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Thì Hiện tại hoàn thành: 'since + mốc thời gian'. Cấu trúc: S + have/has + V3/ed. Chủ ngữ 'They' đi kèm 'have known'."
          },
          {
            "id": "TN9_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. Which word has a different pronunciation in the underlined part?",
            "options": [
              "A. cat",
              "B. bag",
              "C. flat",
              "D. wash"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Chữ 'a' trong cat, bag, flat phát âm là /æ/. Trong khi ở 'wash' phát âm là /ɒ/."
          },
          {
            "id": "TN9_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. The sum of my parents' ages is 70. Twenty years ago, my father was 4 years older than my mother. How old is my mother now?",
            "options": [
              "A. 33",
              "B. 37",
              "C. 35",
              "D. 32"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Hiệu số tuổi của bố và mẹ luôn không đổi: bố luôn hơn mẹ 4 tuổi. Hiện tại tổng tuổi là 70, vậy tuổi mẹ là: (70 - 4) / 2 = 33 tuổi. Tuổi bố là: 33 + 4 = 37 tuổi."
          },
          {
            "id": "TN9_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. A shop allows customers to exchange 5 empty milk cartons for 1 carton of milk. Lan has 25 empty cartons, how many milk cartons can she get in total by recycling?",
            "options": [
              "A. 5",
              "B. 6",
              "C. 7",
              "D. 8"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Ban đầu đổi 25 vỏ hộp lấy 5 hộp sữa mới. Uống hết thu được 5 vỏ hộp rỗng. Tiếp tục mang 5 vỏ hộp rỗng đổi lấy 1 hộp sữa thứ sáu. Tổng số hộp nhận được là: 5 + 1 = 6 hộp sữa."
          },
          {
            "id": "TN9_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. In the diagrams, figure 1 has 5 small squares, figure 2 has 10 small squares and figure 3 has 17 small squares. What is the pattern of squares for figure n?",
            "options": [
              "A. n*n + 4",
              "B. n*n + 3",
              "C. 2n + 3",
              "D. 3n + 2"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Quy luật số ô vuông cho Hình n: Hình 1 = 1*1+4 = 5. Hình 2 = 2*2+4 = 10. Hình 3 = 3*3+4 = 17. Vậy quy luật là n*n + 4."
          },
          {
            "id": "TN9_17",
            "image": "images/math_E9.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. The figure below is a rectilinear shape. Find the perimeter of the figure below (sides are marked with lengths).",
            "options": [
              "A. 80 cm",
              "B. 40 cm",
              "C. 60 cm",
              "D. 70 cm"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Chu vi của một đa giác vuông (rectilinear shape) có thể được tính bằng cách tịnh tiến các đoạn thẳng nhỏ ra biên ngoài để tạo thành một hình chữ nhật lớn bao quanh. Chiều dài hình chữ nhật bao quanh là 24 cm, chiều rộng là 16 cm => Chu vi: 2 * (24 + 16) = 80 cm."
          },
          {
            "id": "TN9_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Hãy chọn quan hệ từ thích hợp điền vào chỗ trống: 'Cây lúa rất cần nước, _______ nếu thiếu nước cây lúa sẽ không thể trổ bông.'",
            "options": [
              "A. và",
              "B. nhưng",
              "C. vì thế",
              "D. tuy nhiên"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Từ 'vì thế' (hoặc do đó) biểu thị quan hệ Nguyên nhân - Kết quả một cách lô-gích."
          },
          {
            "id": "TN9_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Xác định cặp quan hệ từ trong câu ghép: 'Tuy trời đổ mưa bão dữ dội nhưng các chiến sĩ vẫn kiên cường canh gác ngoài hải đảo.'",
            "options": [
              "A. Tuy... nhưng...",
              "B. Vì... nên...",
              "C. Hễ... thì...",
              "D. Không những... mà còn..."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Cặp quan hệ từ 'Tuy... nhưng...' thể hiện quan hệ tương phản giữa hai vế câu ghép."
          },
          {
            "id": "TN9_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Thành ngữ 'Lá lành đùm lá rách' khuyên chúng ta đạo lí sống gì?",
            "options": [
              "A. Sống yêu thương, đùm bọc và giúp đỡ người gặp hoàn cảnh khó khăn.",
              "B. Sống tiết kiệm, biết tích lũy cho tương lai.",
              "C. Sống dũng cảm, đối mặt với hiểm nguy.",
              "D. Sống khiêm tốn, nhường nhịn người khác."
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "'Lá lành đùm lá rách' khuyên chúng ta tinh thần tương thân tương ái, cưu mang và giúp đỡ những hoàn cảnh khó khăn trong cuộc sống."
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Đề thi trắc nghiệm số 10 (Biên soạn - Đề thi tổng hợp cuối cùng)",
    "duration": 30,
    "totalPoints": 40,
    "subject": "tracnghiem",
    "parts": [
      {
        "title": "PHẦN KHẢO SÁT NĂNG LỰC TRẮC NGHIỆM (40.0 điểm)",
        "description": "Chọn phương án trả lời đúng nhất cho các câu hỏi bên dưới. Mỗi câu trả lời đúng được 2.0 điểm.",
        "questions": [
          {
            "id": "TN10_1",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 1. What state of matter has a definite shape and a definite volume?",
            "options": [
              "A. Solid",
              "B. Liquid",
              "C. Gas",
              "D. Crystal"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Chất rắn (Solid) có lực liên kết mạnh giúp nó duy trì hình dạng và thể tích xác định của mình."
          },
          {
            "id": "TN10_2",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 2. A mixture of iron filings (mạt sắt) and sand can be separated easily by using ______.",
            "options": [
              "A. a magnet",
              "B. filter paper",
              "C. water",
              "D. heat"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Mạt sắt có từ tính nên dễ dàng bị nam châm (magnet) hút tách ra khỏi hỗn hợp cát khô."
          },
          {
            "id": "TN10_3",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 3. Which of the following materials is a good conductor of heat?",
            "options": [
              "A. Wood",
              "B. Copper",
              "C. Plastic",
              "D. Glass"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Đồng (Copper) là kim loại dẫn nhiệt rất tốt, trong khi gỗ, nhựa và thủy tinh là những chất dẫn nhiệt kém."
          },
          {
            "id": "TN10_4",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 4. What is the device used to store chemical energy and convert it into electrical energy?",
            "options": [
              "A. Switch",
              "B. Battery",
              "C. Bulb",
              "D. Fuse"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Pin (Battery) tích lũy hóa năng và giải phóng thành điện năng chạy trong mạch điện để tải điện cho thiết bị hoạt động."
          },
          {
            "id": "TN10_5",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 5. Which of the following diseases is transmitted by female Anopheles mosquitoes?",
            "options": [
              "A. Dengue fever",
              "B. Malaria",
              "C. Influenza",
              "D. Cholera"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sốt rét (Malaria) do ký sinh trùng Plasmodium gây ra và lây truyền sang người qua vết đốt của muỗi Anopheles cái. Sốt xuất huyết lây qua muỗi vằn Aedes aegypti."
          },
          {
            "id": "TN10_6",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 6. Which gas do humans and animals inhale from the air for respiration?",
            "options": [
              "A. Carbon dioxide",
              "B. Oxygen",
              "C. Nitrogen",
              "D. Helium"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Con người và động vật hít vào khí ôxy (Oxygen) để thực hiện hô hấp tế bào và duy trì sự sống."
          },
          {
            "id": "TN10_7",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 7. In 1288, which famous general defeated the Mongol (Yuan) invaders on the Bạch Đằng River by using wooden stakes?",
            "options": [
              "A. Trần Quốc Toản",
              "B. Trần Hưng Đạo",
              "C. Trần Thái Tông",
              "D. Trần Quang Khải"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Trần Hưng Đạo (Trần Quốc Tuấn) là vị tướng kiệt xuất chỉ huy quân dân nhà Trần đánh tan giặc Mông - Nguyên trên sông Bạch Đằng năm 1288 bằng chiến thuật cọc gỗ."
          },
          {
            "id": "TN10_8",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 8. Which is the oldest National Park in Vietnam, established in 1962 and famous for its rich biodiversity?",
            "options": [
              "A. Cát Tiên National Park",
              "B. Cúc Phương National Park",
              "C. Ba Bể National Park",
              "D. Phong Nha National Park"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Vườn quốc gia Cúc Phương (được thành lập năm 1962) là vườn quốc gia đầu tiên và có lịch sử lâu đời nhất nước ta."
          },
          {
            "id": "TN10_9",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 9. What is the capital city of Germany?",
            "options": [
              "A. Munich",
              "B. Berlin",
              "C. Frankfurt",
              "D. Hamburg"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Thủ đô của nước Cộng hòa Liên bang Đức là thành phố Berlin."
          },
          {
            "id": "TN10_10",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 10. Which historical complex on Long Sơn island in Vũng Tàu is associated with the local belief of 'Ông Trần' and has a unique architecture made of wood, tiles and brick?",
            "options": [
              "A. Nhà Lớn Long Sơn",
              "B. Bạch Dinh",
              "C. Dinh Cô",
              "D. Linh Sơn Cổ Tự"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Nhà Lớn Long Sơn (đền Ông Trần) tại xã đảo Long Sơn, Vũng Tàu là di tích kiến trúc tâm linh độc đáo, thể hiện tín ngưỡng và lối sống Nam Bộ xưa."
          },
          {
            "id": "TN10_11",
            "image": "images/sign_E10.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 11. What does this sign mean (Picture 2)?",
            "options": [
              "A. Drivers can stop but cannot park here.",
              "B. Drivers can park but cannot stop here.",
              "C. Drivers must not stop or park their vehicles here.",
              "D. Parking is free for all vehicles."
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Biển báo cấm dừng xe và đỗ xe (Biển P.130). Cấm tất cả các phương tiện giao thông dừng và đỗ ở đường có đặt biển."
          },
          {
            "id": "TN10_12",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 12. Choose the correct spelling:",
            "options": [
              "A. Beautiful",
              "B. Beautifull",
              "C. Beautifull",
              "D. Bietiful"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Từ viết đúng chính tả tiếng Anh là 'Beautiful' (xinh đẹp)."
          },
          {
            "id": "TN10_13",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 13. What is the comparative form of 'good'?",
            "options": [
              "A. gooder",
              "B. better",
              "C. best",
              "D. more good"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Tính từ bất quy tắc 'good' có dạng so sánh hơn là 'better' và dạng so sánh nhất là 'best'."
          },
          {
            "id": "TN10_14",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 14. An’s grandfather has an old clock. Every hour the old clock moves 5 minutes slower than a normal clock. If the clock is set to the correct time at 8:00 AM, what is the actual time when the old clock shows 1:30 PM?",
            "options": [
              "A. 1:00 PM",
              "B. 2:00 PM",
              "C. 2:30 PM",
              "D. 1:45 PM"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Thời gian trôi qua trên đồng hồ cũ từ 8:00 AM đến 1:30 PM là 5 giờ 30 phút = 330 phút. Cứ 1 giờ thực tế (60 phút) đồng hồ cũ chạy được 55 phút. Số giờ thực tế trôi qua: 330 / 55 = 6 giờ. Vậy thời gian thực tế hiện tại là: 8:00 AM + 6 giờ = 2:00 PM."
          },
          {
            "id": "TN10_15",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 15. When you drop a brick (the waterproof brick) into a rectangular tank of water, the level of water in the tank rises. The tank has base area 10 dm2 and the water level rises by 2 cm. If 1 dm3 of brick weighs 2500 grams, how many kilograms does the brick weigh?",
            "options": [
              "A. 5 kg",
              "B. 2.5 kg",
              "C. 50 kg",
              "D. 25 kg"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Đổi 2 cm = 0.2 dm. Thể tích nước dâng lên bằng thể tích của viên gạch: V = Diện tích đáy * Chiều cao dâng = 10 * 0.2 = 2 dm3. Khối lượng của viên gạch: 2 dm3 * 2500 g/dm3 = 5000 g = 5 kg."
          },
          {
            "id": "TN10_16",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 16. What is the missing shape in the sequence (Circle, Triangle, Square, Pentagon, _____)?",
            "options": [
              "A. Hexagon",
              "B. Octagon",
              "C. Diamond",
              "D. Rectangle"
            ],
            "modelAnswer": "A",
            "rubric": "Chọn đúng A.",
            "explanation": "Các hình có số cạnh tăng dần: Tròn (0), Tam giác (3), Tứ giác (4), Ngũ giác (5). Hình tiếp theo là Lục giác (Hexagon - 6 cạnh)."
          },
          {
            "id": "TN10_17",
            "image": "images/math_E10.png",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 17. How many squares are there in the figure below?",
            "options": [
              "A. 40",
              "B. 45",
              "C. 50",
              "D. 55"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "Bằng cách đếm số ô vuông kích thước 1x1, 2x2, 3x3 và 4x4 xếp chồng chéo theo lưới thiết kế trong sơ đồ, tổng số hình vuông tìm được là 50 hình."
          },
          {
            "id": "TN10_18",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 18. Hãy tìm thành ngữ điền vào chỗ trống: 'Cậu ấy ăn nói rất khéo léo, đúng là ______.'",
            "options": [
              "A. khua môi múa mép",
              "B. ngọt mật chết ruồi",
              "C. nói ngọt lọt đến xương",
              "D. nói như rồng leo"
            ],
            "modelAnswer": "C",
            "rubric": "Chọn đúng C.",
            "explanation": "'Nói ngọt lọt đến xương' chỉ sự ăn nói khéo léo, ngọt ngào, dễ thuyết phục và đi vào lòng người."
          },
          {
            "id": "TN10_19",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 19. Xác định bộ phận trạng ngữ trong câu sau: 'Bên rặng cúc tần xanh rì, những đóa hoa vàng li ti bắt đầu hé nở dưới ánh nắng thu.'",
            "options": [
              "A. Bên rặng cúc tần xanh rì",
              "B. những đóa hoa vàng li ti",
              "C. dưới ánh nắng thu",
              "D. Bên rặng cúc tần xanh rì và dưới ánh nắng thu"
            ],
            "modelAnswer": "D",
            "rubric": "Chọn đúng D.",
            "explanation": "Câu này có hai trạng ngữ: 'Bên rặng cúc tần xanh rì' (chỉ nơi chốn) và 'dưới ánh nắng thu' (chỉ nơi chốn/hoàn cảnh)."
          },
          {
            "id": "TN10_20",
            "type": "mc",
            "maxPoints": 2,
            "text": "Question 20. Trong câu thơ: 'Dòng sông mới điệu làm sao / Nắng lên mặc áo lụa đào thướt tha', tác giả sử dụng nghệ thuật tu từ chủ yếu nào?",
            "options": [
              "A. So sánh",
              "B. Nhân hóa",
              "C. Hoán dụ",
              "D. Nói quá"
            ],
            "modelAnswer": "B",
            "rubric": "Chọn đúng B.",
            "explanation": "Sử dụng từ chỉ đặc điểm con người như 'điệu', 'mặc áo lụa đào thướt tha' để tả dòng sông là biện pháp nhân hóa sinh động."
          }
        ]
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.TRACNGHIEM_EXAMS = TRACNGHIEM_EXAMS;
}
