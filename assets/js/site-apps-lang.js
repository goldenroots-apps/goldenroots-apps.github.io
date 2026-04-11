var SITE_APP_LANGS={
  en:{
    app2_name:"CashDiary",
    app2_desc:"A clean daily money tracker for logging income, expenses, balances, and personal notes with a privacy-first approach.",
    badge_private:"Privacy First",
    footer_cashdiary_privacy:"CashDiary Privacy",
    about_app2_h:"CashDiary",
    about_app2_p:"A simple personal finance companion for tracking daily income and expenses in a clean, focused interface. Built for people who want a lightweight record of their money without unnecessary complexity."
  },
  th:{
    app2_name:"CashDiary",
    app2_desc:"แอปบันทึกรายรับรายจ่ายรายวันที่เรียบง่าย สำหรับจดรายรับ รายจ่าย ยอดคงเหลือ และโน้ตส่วนตัว โดยให้ความสำคัญกับความเป็นส่วนตัว",
    badge_private:"เน้นความเป็นส่วนตัว",
    footer_cashdiary_privacy:"ความเป็นส่วนตัว CashDiary",
    about_app2_h:"CashDiary",
    about_app2_p:"ผู้ช่วยจัดการการเงินส่วนตัวแบบเรียบง่าย สำหรับติดตามรายรับและรายจ่ายประจำวันในหน้าตาที่สะอาดและโฟกัสกับสิ่งสำคัญ เหมาะกับคนที่ต้องการบันทึกการเงินแบบเบา ๆ โดยไม่ซับซ้อนเกินจำเป็น"
  },
  ja:{
    app2_name:"CashDiary",
    app2_desc:"収入、支出、残高、個人メモをすっきり記録できる、プライバシー重視の日々の家計管理アプリです。",
    badge_private:"プライバシー重視",
    footer_cashdiary_privacy:"CashDiary プライバシー",
    about_app2_h:"CashDiary",
    about_app2_p:"毎日の収入と支出を、見やすく無駄のない画面で記録できるシンプルな家計管理アプリです。余計な複雑さを避け、必要な記録だけを軽快に続けたい人のために作られています。"
  },
  zh:{
    app2_name:"CashDiary",
    app2_desc:"一款简洁的日常记账应用，可记录收入、支出、余额和个人备注，并优先保护你的隐私。",
    badge_private:"隐私优先",
    footer_cashdiary_privacy:"CashDiary 隐私政策",
    about_app2_h:"CashDiary",
    about_app2_p:"一款简洁的个人财务工具，帮助你在清爽专注的界面中记录每日收入与支出。适合希望轻量管理资金、不想被复杂功能打扰的用户。"
  },
  ko:{
    app2_name:"CashDiary",
    app2_desc:"수입, 지출, 잔액, 개인 메모를 깔끔하게 기록할 수 있는 프라이버시 우선 일일 가계부 앱입니다.",
    badge_private:"개인정보 우선",
    footer_cashdiary_privacy:"CashDiary 개인정보",
    about_app2_h:"CashDiary",
    about_app2_p:"매일의 수입과 지출을 깔끔하고 집중된 화면에서 기록할 수 있는 간단한 개인 자금 관리 앱입니다. 불필요한 복잡함 없이 가볍게 돈의 흐름을 남기고 싶은 사람을 위해 만들었습니다."
  },
  hi:{
    app2_name:"CashDiary",
    app2_desc:"आय, खर्च, बैलेंस और निजी नोट्स को आसान तरीके से दर्ज करने वाला एक साफ-सुथरा डेली मनी ट्रैकर, जो गोपनीयता को प्राथमिकता देता है।",
    badge_private:"प्राइवेसी फर्स्ट",
    footer_cashdiary_privacy:"CashDiary प्राइवेसी",
    about_app2_h:"CashDiary",
    about_app2_p:"दैनिक आय और खर्च को साफ, केंद्रित इंटरफेस में ट्रैक करने के लिए एक सरल निजी वित्त साथी। उन लोगों के लिए बनाया गया है जो बिना अनावश्यक जटिलता के अपने पैसों का हल्का लेकिन उपयोगी रिकॉर्ड रखना चाहते हैं।"
  },
  es:{
    app2_name:"CashDiary",
    app2_desc:"Un registro diario de dinero, limpio y sencillo, para anotar ingresos, gastos, saldos y notas personales con un enfoque de privacidad primero.",
    badge_private:"Privacidad Primero",
    footer_cashdiary_privacy:"Privacidad de CashDiary",
    about_app2_h:"CashDiary",
    about_app2_p:"Un compañero simple de finanzas personales para registrar ingresos y gastos diarios en una interfaz limpia y enfocada. Pensado para quienes quieren llevar un control ligero de su dinero sin complejidad innecesaria."
  }
};
Object.keys(SITE_APP_LANGS).forEach(function(lang){
  if(LANGS[lang]){
    Object.assign(LANGS[lang],SITE_APP_LANGS[lang]);
  }
});
