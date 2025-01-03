import { tarotCategory } from '../enum/tarot-category.enum';
import { TarotConfig } from '../models/tarot-config.model';

export const tarotConfig: TarotConfig = {
    major: [
        {
            "name": "The Fool",
            "imageUrl": "",
            "description": "การเริ่มต้นอะไรใหม่ ๆ การเสี่ยงอันตราย หากว่าเปิดได้ไพ่ใบนี้แล้วล่ะก็ เส้นทางใหม่ที่เพื่อน ๆ จะเดินไปอาจมีความเสี่ยง แต่เป็นความเสี่ยงที่เพื่อน ๆ ต้องการ รู้ว่าเสี่ยงแต่คงต้องขอลอง",
            number: 0,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Magician",
            "imageUrl": "",
            "description": "ความทะเยอทะยาน การลงมือทำ ไพ่บอกว่าเพื่อน ๆ เก่งมาก อยากทำอะไรก็ลุยให้เต็มที่เลย เพราะไฟในตัวมีเยอะพอ ๆ กับความสามารถ ดังนั้นลุยได้เลยไม่ต้องยั้ง",
            number: 1,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The High Priestess",
            "imageUrl": "",
            "description": "ความฉลาด มีความรู้ความสามารถ เป็นตัวแทนของคนเก่งมากความสามารถ แต่มักซ่อนสิ่งนั้นเอาไว้ภายในรูปลักษณ์นิ่งเงียบที่แสดงให้ภายนอกได้เห็น",
            number: 2,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Empress",
            "imageUrl": "",
            "description": "ความอุดมสมบูรณ์ ความเป็นแม่ เปิดได้ไพ่ใบนี้บอกเลยว่าจะเจอแต่ความสุขความสบาย เงินทองมั่งมี หรืออาจหมายถึงโอกาสตั้งครรภ์ได้ด้วย",
            number: 3,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Emperor",
            "imageUrl": "",
            "description": "การมีอำนาจ ชอบสั่ง และไม่ยอมใคร เพื่อน ๆ อาจอยู่ในสถานการณ์ที่ต้องยอมทำตามผู้ใหญ่ ถูกบังคับจากคนมีอำนาจมากกว่าก็เป็นได้ และยังหมายถึงความมั่นคงได้อีกด้วย",
            number: 4,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Hierophant",
            "imageUrl": "",
            "description": "การมีความรู้ การแต่งงาน การรวมเป็นหนึ่ง พระคือตัวแทนของผู้มีความรู้และยังเป็นตัวแทนในการแต่งงานรวมเป็นครอบครัวเดียวกัน อาจหมายถึงการเป็นที่พึ่งพาของคนอื่น ๆ",
            number: 5,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Lovers",
            "imageUrl": "",
            "description": "ความรัก การตัดสินใจ แน่นอนว่าใบนี้ต้องหมายถึงความรัก ได้พบเจอความรัก หรือต้องตัดสินใจเลือกสิ่งใดสิ่งหนึ่ง",
            number: 6,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Chariot",
            "imageUrl": "",
            "description": "ความแน่วแน่ มุ่งมั่น ขยัน ทุ่มเท เมื่อเจอไพ่ใบนี้ เพื่อน ๆ ก็ต้องทำตัวให้แข็งแกร่งยิ่งกว่าม้าศึกถึงจะประสบความสำเร็จในสิ่งที่ทำ",
            number: 7,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "Strength",
            "imageUrl": "",
            "description": "ความแข็งแกร่ง บริหารจัดการเก่ง ไพ่นี้คือตัวแทนของหญิงสาวสุดแกร่ง มีอะไรเข้ามาก็ไม่อาจทำอะไรเธอได้ แถมยังจัดการสิ่งต่าง ๆ ได้เป็นอย่างดีอีกด้วย",
            number: 8,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Hermit",
            "imageUrl": "",
            "description": "ความสันโดษ โดดเดี่ยว วิเคราะห์ เมื่อเจอไพ่ใบนี้ก็คงเลี่ยงไม่พ้นการอยู่ตัวคนเดียว การใช้เวลารักษาเยียวยาจิตใจ หรือแม้แต่การใช้เวลานี้เพื่อคิดวิเคราะห์สิ่งต่าง ๆ รอบตัว อย่าได้ใจร้อนทำสิ่งใดเด็ดขาด",
            number: 9,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Wheel of Fortune",
            "imageUrl": "",
            "description": "โชคชะตา เปลี่ยนแปลง หากไพ่ใบนี้ปรากฏขึ้น เพื่อน ๆ ต้องเตรียมตัวให้ดี เพราะมีโอกาสเกิดเรื่องที่ไม่คาดฝันได้ มีการเปลี่ยนแปลงที่เราไม่อาจขัดขวางได้ อาจจะเป็นเรื่องดีหรือไม่ดีก็ได้เช่นกัน",
            number: 10,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "Justice",
            "imageUrl": "",
            "description": "การตัดสินใจ เท่าเทียม กฎหมาย หากเปิดเจอไพ่นี้แสดงว่าเพื่อน ๆ จะได้รับความยุติธรรม มีการตัดสินใจที่ก่อให้เกิดความเท่าเทียม หรืออาจจะเจอกับเรื่องราวเกี่ยวกับกฎหมายก็ได้เช่นกัน",
            number: 11,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Hanged Man",
            "imageUrl": "",
            "description": "การรอคอย เสียสละ เพื่อน ๆ อาจได้เจอกับสถานการณ์ที่ไม่อาจตัดสินใจทำอะไรได้ ต้องอยู่นิ่ง ๆ ต้องรอคอย หรืออาจจะต้องเสียสละความสุขส่วนตัวบางอย่าง",
            number: 12,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "Death",
            "imageUrl": "",
            "description": "การเปลี่ยนแปลง เกิดใหม่ เรื่องร้าย ๆ จะกลายเป็นดีนะคะ สิ่งต่าง ๆ ที่ว่าร้ายแรงแล้วจะเริ่มเปลี่ยนแปลงไปในทางที่ดีขึ้นทีละนิด",
            number: 13,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "Temperance",
            "imageUrl": "",
            "description": "การต่อรอง ผสมผสาน สมดุล ไพ่อยากแนะนำให้เพื่อน ๆ สร้างความสมดุลให้ชีวิต ต้องต่อรองและยอมอ่อนข้อบ้างเพื่อให้ได้สิ่งที่ต้องการ",
            number: 14,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Devil",
            "imageUrl": "",
            "description": "การควบคุม ผูกมัด ไร้ความหวัง ระวังให้ดี เมื่อไพ่ใบนี้ปรากฏขึ้นมา เพราะเพื่อน ๆ อาจเจอกับการควบคุม ถูกผูกมัดโดยไม่เต็มใจจนทำให้หมดพลังใจและหมดความหวัง",
            number: 15,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Tower",
            "imageUrl": "",
            "description": "การเปลี่ยนแปลงกะทันหัน การทะเลาะเบาะแว้ง ต้องเตรียมใจให้ดี เพราะอาจเจอเรื่องไม่คาดฝัน ได้รับข่าวสารที่ไม่ทันได้เตรียมใจ หรือเกิดเรื่องบาดหมางใหญ่โตกับคนรอบตัว",
            number: 16,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Star",
            "imageUrl": "",
            "description": "ความหวัง ความสงบ แม้ฟ้าจะมืดมิด แต่หากไพ่ใบนี้โผล่ขึ้นมาก็เหมือนกับมีความหวังจากดวงดาวปรากฏขึ้น ควรทำตัวให้สงบเยือกเย็นเอาไว้",
            number: 17,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Moon",
            "imageUrl": "",
            "description": "ความกลัว ภาพลวงตา บางครั้งความกลัวก็อาจคืบคลานเข้ามาหาเพื่อน ๆ แบบไม่รู้ตัว แต่ไพ่อาจบอกให้พิจารณาให้ดีว่าสิ่งนั้นน่ากลัวจริง ๆ หรือเป็นเพียงภาพลวงตา",
            number: 18,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The Sun",
            "imageUrl": "",
            "description": "การเติบโต แสงสว่าง มีชีวิตชีวา ไพ่ที่เป็นตัวแทนของความร้อนแรงและสดใส และเร็ว ๆ นี้อาจมีเรื่องดี ๆ เข้ามาเซอร์ไพรส์ก็เป็นได้",
            number: 19,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "Judgement",
            "imageUrl": "",
            "description": "การตัดสินใจ โอกาสครั้งที่สอง จะมีเรื่องสำคัญมาก ๆ เข้ามาให้ต้องตัดสินใจ ต้องปล่อยอดีตให้ผ่านไปเพื่อให้สิ่งใหม่ ๆ ได้เข้ามาแทน",
            number: 20,
            category: tarotCategory.MAJOR_ARCANA
        },
        {
            "name": "The World",
            "imageUrl": "",
            "description": "ความสำเร็จ ความสมบูรณ์ ถือเป็นอีกหนึ่งใบดี ๆ อีกหนึ่งใบ มีความสำเร็จเกิดขึ้น ชีวิตเติมเต็มมาก ๆ ด้วย",
            number: 21,
            category: tarotCategory.MAJOR_ARCANA
        }
    ],
    cups: [
        {
          "name": "Ace of Cups",
          "imageUrl": "/assets/images/tarot/cups/ace_of_cups.webp",
          "description": "ความรัก การเริ่มต้น การมอบสิ่งดี ๆ ให้กับอีกฝ่ายหรืออาจจะเป็นฝ่ายได้รับสิ่งดี ๆ จากผู้อื่น",
          number: 1,
          category: tarotCategory.CUPS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Two of Cups",
          "imageUrl": "",
          "description": "คนรัก คู่รัก การมอบความรักให้กันและกัน ถ้าชอบใครอยู่อาจมีโอกาสสมหวังนะคะ",
          number: 2,
          category: tarotCategory.CUPS
        },
        {
          "name": "Three of Cups",
          "imageUrl": "",
          "description": "การเฉลิมฉลอง ปาร์ตี้กับเพื่อน ๆ มีความรักแบบเพื่อนฝูง แฮปปี้มีความสุข",
          number: 3,
          category: tarotCategory.CUPS
        },
        {
          "name": "Four of Cups",
          "imageUrl": "",
          "description": "การหยุดนิ่ง ความเบื่อหน่าย แม้จะมีความสุข มีสิ่งดี ๆ รายล้อม แต่กลับเบื่อหน่ายเพราะอยู่แต่ในกรอบเดิม ๆ",
          number: 4,
          category: tarotCategory.CUPS
        },
        {
          "name": "Five of Cups",
          "imageUrl": "/assets/images/tarot/cups/5_of_cups.webp",
          "description": "การสูญเสีย ความเศร้า เหมือนถ้วยที่ล้มลง ความรู้สึกสิ้นหวัง ความหวังพังทลาย",
          number: 5,
          category: tarotCategory.CUPS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Six of Cups",
          "imageUrl": "",
          "description": "ความสงบสุข มีคนมาเยี่ยม อาจได้รับเซอร์ไพรส์จากคนอื่น มีการมาหาแบบไม่ทันตั้งตัว ได้รับของฝาก",
          number: 6,
          category: tarotCategory.CUPS
        },
        {
          "name": "Seven of Cups",
          "imageUrl": "",
          "description": "ความสับสน ตัวเลือกเยอะ เกิดขึ้นได้จากความรู้สึกที่มีมากมายเกินความจำเป็น หรือแม้แต่มีข้อเสนอเข้ามาเยอะมากจนตัดสินใจไม่ถูก",
          number: 7,
          category: tarotCategory.CUPS
        },
        {
          "name": "Eight of Cups",
          "imageUrl": "/assets/images/tarot/cups/8_of_cups.webp",
          "description": "การจากลา ทอดทิ้ง การเดินหนีจากสิ่งที่ทำให้ผิดหวัง หรือเรื่องนั้น ๆ ได้จบลงแล้ว ได้เวลาก้าวต่อไป",
          number: 8,
          category: tarotCategory.CUPS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Nine of Cups",
          "imageUrl": "",
          "description": "สมหวัง ความหวังเป็นจริง สิ่งที่อยากได้กำลังจะกลายเป็นจริงแล้วนะคะ นั่งรอได้เลย",
          number: 9,
          category: tarotCategory.CUPS
        },
        {
          "name": "Ten of Cups",
          "imageUrl": "",
          "description": "ความสุข ครอบครัว การมีทุกอย่างพร้อม มีความสุขแบบสุด ๆ",
          number: 10,
          category: tarotCategory.CUPS
        },
        {
          "name": "Page of Cups",
          "imageUrl": "/assets/images/tarot/cups/page_of_cups.webp",
          "description": "ความสนุก ชอบเข้าสังคม ได้พบเจอกับคนมากหน้าหลายตา หรืออาจได้รับข่าวสารบางอย่าง",
          number: 11,
          category: tarotCategory.CUPS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Knight of Cups",
          "imageUrl": "",
          "description": "นักสู้ นักฝัน การขอร้อง ขอแต่งงาน อยากได้สิ่งใดก็ต้องออกไปฝ่าฟันเอามาให้ได้",
          number: 12,
          category: tarotCategory.CUPS
        },
        {
          "name": "Queen of Cups",
          "imageUrl": "",
          "description": "สัญชาตญาณดี การพิจารณา หากต้องตัดสินใจอะไรก็ตาม ต้องคิดทบทวนอย่างรอบคอบ",
          number: 13,
          category: tarotCategory.CUPS
        },
        {
          "name": "King of Cups",
          "imageUrl": "/assets/images/tarot/cups/king_of_cups.webp",
          "description": "ฉลาด สุขุม อดทน แม้ว่าจะต้องเจอกับเหตุการณ์ไม่มั่นคงใด ๆ ก็ต้องวางตัวหนักแน่  ใช้เหตุผลมากกว่าอารมณ์",
          number: 14,
          category: tarotCategory.CUPS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        }
      ],
      coins: [
        {
          "name": "Ace of Coins",
          "imageUrl": "",
          "description": "เงินทอง ความสำเร็จ การเริ่มต้น จุดเริ่มต้นของความมั่นคงมาถึงแล้ว เตรียมรับให้ดี",
          number: 1,
          category: tarotCategory.COINS
        },
        {
          "name": "Two of Coins",
          "imageUrl": "/assets/images/tarot/coins/2_of_coins.webp",
          "description": "การตัดสินใจ การเลือกด้วยความระมัดระวัง และยังหมายถึงการหมุนเงินอีกด้วย",
          number: 2,
          category: tarotCategory.COINS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Three of Coins",
          "imageUrl": "",
          "description": "การแสดงความสามารถออกมาให้คนอื่นเห็น การมุ่งมั่นสร้างฐานะ",
          number: 3,
          category: tarotCategory.COINS
        },
        {
          "name": "Four of Coins",
          "imageUrl": "",
          "description": "ความมั่นคง ความร่ำรวย เก็บเงินเก่งจนสร้างความมั่นคงให้ชีวิตได้ดี",
          number: 4,
          category: tarotCategory.COINS
        },
        {
          "name": "Five of Coins",
          "imageUrl": "",
          "description": "มีปัญหาทางการเงิน การแยกจากกัน ความลำบาก ช่วยเหลือคนอื่นไม่ได้ และคนอื่นก็ไม่ได้ช่วยเหลือเช่นกัน",
          number: 5,
          category: tarotCategory.COINS
        },
        {
          "name": "Six of Coins",
          "imageUrl": "",
          "description": "ความมีน้ำใจ การแบ่งปัน แต่ก็เป็นการแบ่งปันที่ไม่เท่าเทียม ฝ่ายใดฝ่ายหนึ่งได้มากกว่า",
          number: 6,
          category: tarotCategory.COINS
        },
        {
          "name": "Seven of Coins",
          "imageUrl": "",
          "description": "การลงทุน รางวัลตอบแทน ได้รับผลตอบแทนของการทำงานที่ผ่านมา",
          number: 7,
          category: tarotCategory.COINS
        },
        {
          "name": "Eight of Coins",
          "imageUrl": "",
          "description": "ขยัน ทุ่มเท ขยันทำงานสร้างเงินทองและความมั่นคงของฐานะ ต้องทำงานถึงจะได้เงิน",
          number: 8,
          category: tarotCategory.COINS
        },
        {
          "name": "Nine of Coins",
          "imageUrl": "",
          "description": "มั่นคง มั่งคั่ง มีเงินเก็บมากมาย มีความสบายพร้อมทุกด้าน",
          number: 9,
          category: tarotCategory.COINS
        },
        {
          "name": "Ten of Coins",
          "imageUrl": "",
          "description": "การแต่งงาน ได้รับมรดก ชีวิตดี ๆ ครอบครัวดี เงินดี ชีวิตที่พร้อมทุก ๆ ด้าน",
          number: 10,
          category: tarotCategory.COINS
        },
        {
          "name": "Page of Coins",
          "imageUrl": "",
          "description": "ได้รับข้อเสนอ ได้รับโอกาสดี ๆ แม้จะเป็นเพียงการเริ่มต้นเล็ก ๆ ก็ตาม",
          number: 11,
          category: tarotCategory.COINS
        },
        {
          "name": "Knight of Coins",
          "imageUrl": "",
          "description": "ความละเอียด การใส่ใจ รักอิสระ กล้าออกไปหาเส้นทางใหม่ ๆ",
          number: 12,
          category: tarotCategory.COINS
        },
        {
          "name": "Queen of Coins",
          "imageUrl": "",
          "description": "ใจกว้าง ความอุดมสมบูรณ์ การคิดพิจารณาอย่างละเอียดรอบคอบ",
          number: 13,
          category: tarotCategory.COINS
        },
        {
          "name": "King of Coins",
          "imageUrl": "/assets/images/tarot/coins/king_of_coins.webp",
          "description": "ประสบความสำเร็จ ร่ำรวย มีเงินทองมากมาย หวังสิ่งใดก็จะได้สิ่งนั้น ไม่ขัดสน ไม่ลำบาก",
          number: 14,
          category: tarotCategory.COINS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        }
      ],
      swords: [
        {
          "name": "Ace of Swords",
          "imageUrl": "",
          "description": "ความสำเร็จ จุดเริ่มต้นของสิ่งใหม่ ๆ มีคนยื่นโอกาสดี ๆ เข้ามาให้",
          number: 1,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Two of Swords",
          "imageUrl": "",
          "description": "การจนมุม ขยับตัวไม่ได้ เลือกไม่ได้ว่าต้องทำอย่างไร ตัดสินใจไม่ได้",
          number: 2,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Three of Swords",
          "imageUrl": "/assets/images/tarot/swords/3_of_swords.webp",
          "description": "ความเสียใจ ใจสลาย ต้องเจอเรื่องผิดหวัง และยังหมายถึงเจอฝนถล่มก็ได้",
          number: 3,
          category: tarotCategory.SWORDS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Four of Swords",
          "imageUrl": "",
          "description": "การพักผ่อน นิ่งเฉย โดนกดดันจากรอบตัวจนไม่อาจตัดสินใจอะไรได้",
          number: 4,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Five of Swords",
          "imageUrl": "",
          "description": "ปัญหาต่าง ๆ ที่ถาโถมเข้ามา การไม่ลงรอยกันกับคนรอบตัว รวมไปถึงการสูญเสียบางสิ่งบางอย่าง",
          number: 5,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Six of Swords",
          "imageUrl": "",
          "description": "การละเลยปัญหา เพิกเฉยต่อปัญหา จนบานปลายและทำให้ตกอยู่ในสภาวะจำยอม หรือต้องปล่อยตัวเองไปตามน้ำ",
          number: 6,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Seven of Swords",
          "imageUrl": "",
          "description": "การขโมย ทำเรื่องผิดกฎหมายต่าง ๆ รวมถึงงานที่มีเยอะมากจนล้นมือทำไม่ทัน",
          number: 7,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Eight of Swords",
          "imageUrl": "",
          "description": "การถูกบีบบังคับจากสถานการณ์ต่าง ๆ รอบตัวจนไม่อาจขยับตัวทำอะไรได้ หรือถูกปิดหูปิดตา",
          number: 8,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Nine of Swords",
          "imageUrl": "",
          "description": "ความเครียด ความกังวล ปวดหัว คิดมาก รุนแรงถึงขั้นนอนไม่หลับ",
          number: 9,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Ten of Swords",
          "imageUrl": "/assets/images/tarot/swords/10_of_swords.webp",
          "description": "จุดจบ สิ้นสุด เรื่องเครียดและปวดหัวต่าง ๆ จะจบลงในไม่ช้า",
          number: 10,
          category: tarotCategory.SWORDS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Page of Swords",
          "imageUrl": "",
          "description": "การใช้สัญชาตญาณในการตัดสินใจ เชื่อมั่นในตัวเอง และต้องอดทนเอาไว้แล้วจะชนะอุปสรรคต่าง ๆ ได้",
          number: 11,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Knight of Swords",
          "imageUrl": "",
          "description": "การต่อสู้ ฝ่าฟัน ศัตรู ต้องออกแรงค่อนข้างเยอะ ต้องเหนื่อย ต้องสู้ แล้วถึงจะได้ในสิ่งที่ต้องการ",
          number: 12,
          category: tarotCategory.SWORDS
        },
        {
          "name": "Queen of Swords",
          "imageUrl": "",
          "description": "ความอิสระเสรี ความตรงไปตรงมา ความเด็ดเดี่ยว จัดการสิ่งใดด้วยความเด็ดขาด ไม่ลังเล",
          number: 13,
          category: tarotCategory.SWORDS
        },
        {
          "name": "King of Swords",
          "imageUrl": "",
          "description": "ความมุ่งมั่น ความเด็ดเดี่ยว การคิดวิเคราะห์ หากเจออุปสรรคใด ๆ ต้องใช้ทั้ง 3 อย่างเพื่อผ่านไปให้ได้",
          number: 14,
          category: tarotCategory.SWORDS
        }
      ],
      wands: [
        {
          "name": "Ace of Wands",
          "imageUrl": "",
          "description": "การได้รับข่าวสาร ได้รับโอกาส หรือได้เริ่มต้นกิจกรรมบางอย่าง",
          number: 1,
          category: tarotCategory.WANDS
        },
        {
          "name": "Two of Wands",
          "imageUrl": "",
          "description": "การวางแผนการต่าง ๆ ในอนาคต ความกล้าหาญ กล้าจะก้าวออกไปยังโลกอันไม่คุ้นเคย",
          number: 2,
          category: tarotCategory.WANDS
        },
        {
          "name": "Three of Wands",
          "imageUrl": "",
          "description": "การเดินทางไปยังที่ที่ไม่คุ้นเคย ทำในสิ่งที่กลัว หรือการมองการณ์ไกล",
          number: 3,
          category: tarotCategory.WANDS
        },
        {
          "name": "Four of Wands",
          "imageUrl": "/assets/images/tarot/wands/4_of_wands.webp",
          "description": "ไพ่ 4 คฑา เป็นภาพเด็กผู้หญิงที่นั่งอยู่บนต้นไม้ ตามตัวของเธอมีหยาดเหงื่อราวกับพึ่งปีนต้นไม้สูงนี้ด้วยความอุตส่าหะเสร็จ และตัวเธอก็กำลังเอนดอกไม้ที่ใหญ่ที่สุดบนต้นเพื่อลิ้มรสน้ำหวานของมัน ซึ่งน้ำหวานนี้ถือเป็นสัญาลักษณ์ของรางวัลแห่งความอุตส่าหะของเธอ",
          number: 4,
          category: tarotCategory.WANDS,
          upright: {
            keyword: 'น้ำหวานแห่งความพยายาม, ความสำเร็จที่ได้มาด้วยความอุตสาหะ',
            overallMeaning: 'ความหมายรวมๆของไพ่ 4 คฑาก็คือ สิ่งที่คุณกำลังพยายามมาตลอด จะสำเร็จผลเร็วๆนี้ หยาดเหงื่อแรงกายที่ทุ่มแทลงไปก่อนหน้านี้ จะงอกเงยเป็นดอกผลที่งดงามให้คุณเป็นรางวัล',
            loveMeaning: 'คนที่คุณกำลังจีบอยู่จะเปิดโอกาสให้คุณ หรือคู่ที่คุณครองรักอาจตกหลุมรักคุณอีกครั้ง',
            financeMeaning: 'การลงทุนที่คุณทยอยทำมาหลายปี กำลังจะให้ผลตอบแทนเป็นรางวัลกับคุณเร็วๆนี้',
            careerMeaning: 'การงานไม่ว่าหลักหรือรอง ที่คุณตั้งใจทำมาตลอด กำลังจะประสบความสำเร็จ อาจมีลูกค้ามาจ้างคุณมากขึ้น หรือหัวหน้าเห็นคุณค่าของคุณมากขึ้น และให้โบนัสเยอะขึ้น ฯลฯ'
          },
          reverse: {
            keyword: 'ความพยายามที่ไม่ประสบความสำเร็จ, ถึงเวลาเปลี่ยนเป้าหมาย หรือหยุดพัก',
            overallMeaning: 'สำหรับไพ่ 4 คฑากลับหัว ความหมายรวมๆก็คือ เรื่องที่คุณพยายามทำมาตลอด ซึ่งยังไม่ประสบผลสำเร็จซักที อาจถึงเวลาแล้วที่จะปักหมุดหมายใหม่ ลองเปลี่ยนเป้าหมายไปพยายามเรื่องอื่นบ้าง หรือหาเวลาพักผ่อนจากสิ่งนั้น พักตัว พักใจ แล้วหนทางใหม่จะปรากฏขึ้น',
            loveMeaning: 'คนที่คุณจีบอยู่ แม้คุณจะทุ่มเทให้มานาน เค้าก็ยังไม่สนใจซักที อาจถึงเวลาที่คุณควรหยุดพัก ทิ้งระยะห่างซักนิด แล้วทุกอย่างจะดีเอง',
            financeMeaning: 'การลงทุนที่คุณทำมา อาจไม่ให้ผลตอบแทนเท่าที่ควร อาจถึงเวลาแล้วที่คุณจะ cut loose แล้วมองหาการลงทุนอื่น',
            careerMeaning: 'งานการที่คุณทุ่มเทมาตลอด ดูเหมือนจะไม่มีใครเห็นค่าเท่าที่คุณหวัง อาจถึงเวลามองหาทักษะใหม่ เพื่อเพิ่มพูนความรู้ และคุณค่าในตัวคุณ'
          }
        },
        {
          "name": "Five of Wands",
          "imageUrl": "/assets/images/tarot/wands/5_of_wands.webp",
          "description": "การแข่งขันกับคนหมู่มาก อุปสรรคเยอะมาก หรือทะเลาะเบาะแว้ง ไม่ลงรอยกัน",
          number: 5,
          category: tarotCategory.WANDS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Six of Wands",
          "imageUrl": "",
          "description": "ชัยชนะ ความสำเร็จ การเฉลิมฉลองความสำเร็จ",
          number: 6,
          category: tarotCategory.WANDS
        },
        {
          "name": "Seven of Wands",
          "imageUrl": "",
          "description": "ความยึดมั่น การปกป้องตัวเอง อุปสรรคหรือภาระที่ถาโถมเข้ามาพร้อม ๆ กัน",
          number: 7,
          category: tarotCategory.WANDS
        },
        {
          "name": "Eight of Wands",
          "imageUrl": "",
          "description": "ข่าวสาร การติดต่อสื่อสารจากทางไกล หรือมีโอกาสได้เดินทางไกล",
          number: 8,
          category: tarotCategory.WANDS
        },
        {
          "name": "Nine of Wands",
          "imageUrl": "/assets/images/tarot/wands/9_of_wands.webp",
          "description": "ความเข้มแข็งและมุ่งมั่น การตัดสินใจเลือกสิ่งสำคัญ การป้องกันตัวเอง",
          number: 9,
          category: tarotCategory.WANDS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "Ten of Wands",
          "imageUrl": "",
          "description": "ภาระหน้าที่หรือการทำงานมากเกินไปจนไม่สามารถขยับตัวไปทำสิ่งอื่น ๆ ได้",
          number: 10,
          category: tarotCategory.WANDS
        },
        {
          "name": "Page of Wands",
          "imageUrl": "",
          "description": "ได้รับข่าวสาร กระตือรือร้น กล้าหาญ มุ่งมั่นกับสิ่งที่เลือกแล้ว",
          number: 11,
          category: tarotCategory.WANDS
        },
        {
          "name": "Knight of Wands",
          "imageUrl": "",
          "description": "มั่นใจในตัวเอง ชอบเสี่ยง การลงมือทำสิ่งต่าง ๆ ด้วยความรวดเร็วว่องไว",
          number: 12,
          category: tarotCategory.WANDS
        },
        {
          "name": "Queen of Wands",
          "imageUrl": "/assets/images/tarot/wands/queen_of_wands.webp",
          "description": "การมีความคิดสร้างสรรค์ การเป็นตัวของตัวเอง",
          number: 13,
          category: tarotCategory.WANDS,
          upright: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          },
          reverse: {
            keyword: '',
            overallMeaning: '',
            loveMeaning: '',
            financeMeaning: '',
            careerMeaning: ''
          }
        },
        {
          "name": "King of Wands",
          "imageUrl": "",
          "description": "การมีอำนาจ มีไอเดียใหม่ ๆ กล้าหาญ ความมั่นคงและน่าเชื่อถือ",
          number: 14,
          category: tarotCategory.WANDS
        }
      ]
};
