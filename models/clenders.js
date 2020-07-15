
var mongoose = require('mongoose');
const config = require('../config/database');

var clenderSchema = mongoose.Schema({
  dayName:{
    type: String,
    required: true
  },
  detiles:{
    type: String,
    required: true
  }
      });

	const Clenders = module.exports =mongoose.model('Clenders', clenderSchema);


const day1 = new Clenders ({
	dayName:"يوم الاول",
 detiles:"الاهرامات :حيث عمرها 5000 الف عام او اكثر و هرم سقارة: اول محاولات بناء الاهرامات و المتحف المصري: حيث يضم الكثير من التحف الفرعونية والقبطية والاسلاميةي"
});
const day2 = new Clenders ({
	dayName:"اليوم الثاني",
	detiles:"قلعة قايتباي:تقع هذه القلعة في نهاية جزيرةفاروس غرب اسكندرية و عمود السواري:عمود السواري هو عمود روماني أثري يقع في مدينة الإسكندرية في مصر و مسرح الروماني"
});
const day3 = new Clenders ({
	dayName:"اليوم الثالث",
	detiles:"شواطى الغردقه و سهل حشيش:سهل حشيش هي منطقة سياحية تقع على بعد 25 كيلو مترا جنوب مدينة الغردقة و الجونه و مرسي علم و سفاجا"
});
const day4 = new Clenders ({
	dayName:"اليوم الرابع",
	detiles:"جبال جنوب و واحة غير خضرة:تقع واحة عين خضرة في قلب صحراء جنوب سيناء، على بعد 70 كيلو مترًا في الطريق من سانت كاترين إلى نويبع. و دهب و شرم الشيخ و نويبع و طابا"
});

const day5 = new Clenders ({
	dayName:"اليوم الخامس",
	detiles:"قلعة صلاح الدين:تعد قلعة صلاح الدين الأيوبي واحدة من أهم قلاع مصر، وذلك لتصميمها المعماري المتميز وأهميتها التاريخية والتراثية و كورنيش النيل"
});
const day6 = new Clenders ({
	dayName:"اليوم السادس",
	detiles:"قوس النصر الروماني و مقبرة وادي المومياوات الذهبية وتم العصور على عدد هائل من المومياوات الذهبية يقدر بحوالى عشرة آلاف مومياء ذهبية"
});

const day7 = new Clenders ({
	dayName:"اليوم السابع",
	detiles:"معبد الكرنك و متحف التحنيط و وادي الملوكوادي الملكات"
});
