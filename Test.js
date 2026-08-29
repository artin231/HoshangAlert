import hooshang from "./HooshangAlert.js";

setTimeout(() => {
hooshang.AlHoosh({theme:'light',title:'عملیات با موفقیت انجام شد ',message: 'عملیات با مفقیت انجام شد و به مشکلی بر نخورد',icon:hooshang.Icons.succses,type:'button',buttonMessage:'تایید',color_icon:'green'});
},2000)
