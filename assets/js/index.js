
/*1. Array elementlərinin cəmini / hasilini tapın
let cem=0;
let hasil=1;
let arr=[1,5,3,9];
for (let i = 0; i < arr.length; i++) {
cem+=arr[i];
hasil*=arr[i]

}
console.log("cem",cem);
console.log("hasil",hasil);*/

/* 2. Array elementlərinin içində təkrarlanan elementləri silin

let array=[12,5,6,6,6,9,9,12,65,5,9,100,22,65];
console.log(array);
for (let i = 0; i < array.length; i++) {
for (let j = i+1; j < array.length; j++) {
      if (array[i]==array[j]) {
            array.splice(j,1)
           j--; 
      }
}      
}
console.log(array);*/

/* 3. Array elementlərində ədəd olmayan elementləri silin

let ededOlmayan=["vacib",1988,"eltay",2007,"Saban",2013]
for (let i = 0; i < ededOlmayan.length; i++) {
if (typeof ededOlmayan[i]!='number') {
      ededOlmayan.splice(i,1);
      i--;
}      
}
console.log(ededOlmayan);*/

/* 4. Array elementlərindən maksimum/minimum olanı tapın.

let ededler=[12,25,5,10,60];
let maxs=ededler[0]
let mins=ededler[0];
for (let i = 1; i < ededler.length; i++) {
if (maxs<ededler[i]) {
      maxs=ededler[i]
}  
else if (mins>ededler[i]) {
      mins=ededler[i]
}    
}
console.log("Maxsimum eded ",maxs);
console.log("Minimum eded ",mins);*/

/*5.	Daxil edilən cumlədəki simvol sayını çıxarın.
let cumle="Vacib memmedov 1988";
console.log(cumle);
let sinbolSayi=cumle.length;
console.log(sinbolSayi);*/

/* 6. Array elementlerini 2-yə vurub yeni bir array kimi çap edin.
let ededler=[5,3,4];
let eded=ededler.map((deyer)=>deyer*2);
console.log(eded);*/

/*7. Array elementlərini tərsinə çap edin.
let arr = [1, 2, 3, 4, 5]
let arrTersine= [];

for (let i = arr.length - 1; i >=0; i--) {
    arrTersine.push(arr[i]);
}
console.log(arrTersine);


 
 let arr = [1, 2, 3, 4, 5];
console.log("Düzgün yazılış array: " + arr);

 let arr2=arr.reverse()

 console.log("Tersine yazılış array: " + arr2);*/


/*8. Verilmiş massivlərdə hər bir indeks dəyərinin cəmini hesablayan
JavaScript proqramı yazın.(Massivlərin uzunluqları mütləq eyni olmalıdı)
let arr=[1,3,5,9,10];
let eded=[4,2,6,7,12];
let cem=[]
if (arr.length==eded.length) {
      

for (let i = 0; i < arr.length; i++) {
      cem.push(arr[i]+eded[i])
}
}
console.log(cem);*/


/*9.Sözü tərsinə çevirən program yazın.

let soz="Vacib Memmedov";
let cevrilmisSoz='';

for (let i = soz.length-1; i >=0; i--) {
      cevrilmisSoz+=soz[i]
      
}
console.log(cevrilmisSoz);
// Metdodlarla
let metin="Memmedov";
let ters=metin.split('').reverse().join('')
console.log(ters);*/

/*10. Cümlədəki sözlərin yerini tərsinə çevirən program yazın. (salam mənim adım
leyladır  leyladır adım mənim salam)
let metin="Salam menim adim Vacibdir. Necesen qardas.Ne var ne yox";
let metinSplit=metin.split(" ")
let rev=""
for (let i = 0; i < metinSplit.length; i++) {
if (metinSplit[i]!="") {
     let tersSplit=metinSplit[i].trim().split(" ")
    for (let j = tersSplit.length-1; j>=0; j--) {
    rev+=tersSplit[j]+" "
      
    }
}
      rev+='.'
}
console.log(rev);*/


/*11.	Daxil edilmiş ədədi sözlə yazan funskiya (Məs🡪input:1, output : Bir)
let teklikler=["sifir","bir","iki","uc","dord","bes","alti","yeddi","sekkiz","doqquz"]
let onluqlar=["on","yirmi","otuz","qirx","elli","altmis","yetmis","seksen","doqsan","Yuz"]
let eded=+prompt("ededi daxil edin ")

if (eded>=0 && eded<10) {
      alert(teklikler[eded])
} else if(eded>=10 && eded<=100) {
      let onluq=Math.floor(eded/10)
      let teklik=eded%10
if (teklik==0) {
      alert(onluqlar[onluq-1])
}else{
      alert(onluqlar[onluq-1] + " "+ teklikler[teklik])
}   
}*/

/*12. Verilmiş mətndə sözlərin sayını tapın.
let text=['Vacib','Elman','Elxan'];
console.log(text.length);*/

/*13. Verilmiş cümlədə artıq boşluq simvollarını silin
let cumle= "         Salam            netersen";
let trimCumle=cumle.trim()
// console.log(text);
//  console.log(trimCumle);
 let splitCumle=trimCumle.split(" ")
//  console.log(siplitCumle);
 let newCumle=""
 for (let i = 0; i < splitCumle.length; i++) {
      // console.log(siplitCumle[i]);
     if (splitCumle[i] !="") {
      newCumle+=splitCumle[i]+" ";
     } 
 }
 console.log(newCumle.trim());*/

 /*  14.Verilmiş mətndə cümlələrin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın
let metin="heyat cox qeribedir";
let boyukMetin=metin[0].toUpperCase() + metin.split(1);
console.log(boyukMetin);*/

 /* 15. İki arrayın eyniliyini yoxlayın.
 let arr=[2,3,3];
 let arr2=[6,9,8];
 if (arr.length==arr2.length) {
      console.log("Arrayler beraberdir");
 }
else{
      console.log("arrayler beraber deyil");
}*/
     
/* 16. Array elementlərini sort metodundan istifadə etmədən artma / azalma
istiqamətinə görə sıralayın (bubble sort)
let arr = [12,10,22,8,78,15,1,89,52,25,7,99];
function artan() {
      let lengths=arr.length
    for (let i = 0; i < lengths; i++) {
      for (let j = i; j < lengths; j++) {
       if (arr[i]>arr[j+1]) {
             let arr2=arr[i];
             arr[i]=arr[j+1]
             arr[j+1]=arr2    
       }
       
      }
    } 
 }
 artan();
 console.log("Artan sira ile! ", arr);

 function azalan() {
      let len=arr.length
    for (let i = 0; i < len; i++) {
      for (let j = i; j < len; j++) {
       if (arr[j]<arr[j+1]) {
             let arr2=arr[i];
             arr[i]=arr[j+1]
             arr[j+1]=arr2
       }
       
      }
    } 
 }
 azalan();
 console.log("Azalan sira ile! ", arr);

 let arr = [12,10,22,8,78,15,1,89,52,25,7,99];
 let artan=arr.sort();
 console.log(artan);
 let azalan=arr.reverse()
 console.log(azalan);*/

/*17.	İstifadəçidən ədəd daxil etməyini tələb edin. Proqram daxil edilən ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.  Məs: Giriş: 3456 Çıxış: 3 4 5 6
let eded=prompt("eded daxil edin")
let eded_2=eded.split("").join(" ");
alert(eded_2);*/

/*18. Verilmiş mətndə təkrarlana sözlərin sayını tapın
let cumle="Salam necesen Salam ne var ne yox necesen";
let obj={}
let cumleSplit=cumle.split(" ")
console.log(cumleSplit);
for (let i = 0; i < cumleSplit.length; i++) {
      let soz=cumleSplit[i]
     if (obj[soz]==undefined) {
      obj[soz]=1
     }else{
      obj[soz]++
     }
}
console.log(obj);*/

/*19. Tələbələrin məlumatlarını özündə saxlayan object yaradın. İmtahandan
keçməyən tələbələri objectdən silin.
let telebeler=[
      {
            ad:"Vacib",
            giris_bali:34,
            final_bali:20

      },
      {
            ad:"Elxan",
            giris_bali:44,
            final_bali:30

      },
      {
            ad:"Rauf",
            giris_bali:34,
            final_bali:16

      },
      {
            ad:"Behram",
            giris_bali:30,
            final_bali:20

      }
]
for (let i = 0; i < telebeler.length; i++) {
      // console.log(telebeler[i]);
      if (telebeler[i].giris_bali+telebeler[i].final_bali<51 || telebeler[i].final_bali<17) {
      telebeler.splice(i,1)
     i--

      }
      
}
console.log(telebeler);*/

/*20. Verilmiş 2mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə
əsasən)
let cumle="Salam menim adim vacibdir.Men 1988-ci ilde anadan olmusam"
let cumle2="Salam menim adim Elxandir.Men 1986-ci ilde anadan olmusam"
let say=0
let cumleSplit = cumle2.split(" ")
// console.log(cumleSplit);
for (let i = 0; i < cumleSplit.length; i++) {
      // console.log(cumleSplit[i]);
      if (i<cumleSplit.length-2) {
        let soz=cumleSplit[i]+" "+cumleSplit[i+1]+" "+cumleSplit[i+2]
      // console.log(soz);    
      if (cumle.includes(soz)) {
          say++  
      }
      }
      
}
let faiz=(cumleSplit.length)*0.2
if (faiz<say) {
      console.log("plagiat");
}else{
      console.log("plagiat deyil");
}

console.log(say);
console.log(faiz);*/

/*21. proqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı
2 qat hesablansın
let saat=60;
let saat_haqqi=20;
let maas=0;
if (saat>40) {
      maas=40*saat_haqqi+(saat-40)*2*saat_haqqi
}else{
      maas=saat*saat_haqqi
}
console.log(maas);*/

/*22. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin.
let arr=['ADNA'];
arr='ADNSU';
console.log(arr);*/



/*23. 3 rəqəmli ədədin rəqəmləri cəmini tapın
let eded=698
let ededString=eded.toString()
let cem=0
// for (let i = 0; i < ededString.length; i++) {
//       console.log(+ededString[i]);
//       cem+=+ededString[i]
// }
 //console.log(cem);

 while (eded>0) {
   let qaliq=eded%10  
   eded=Math.floor(eded/10) 
   cem+=qaliq
 }
 console.log(cem);*/

 /*  24. Array daxilində tək yerdə duran elementləri ekrana verin
let eded=[1,6,9,4,2,8,7,11,23,45]
for (let i = 0; i < eded.length; i++) {
     if (i%2 ===0) {
      console.log("Tek yerde duran ededler "+eded[i]);
     }
      
}*/

/* 25. Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin
let ededler=[2,5,12,6,15,26,35,50,49,88,36,30,45,25,60];
for (let i = 0; i < ededler.length; i++) {
    if (ededler[i]%5==0) {
      console.log("Bese bolunen ededler "+ ededler[i]);
    }else{
      console.log("Bese bolunmeyen ededler " + ededler[i]);  
}
      
}*/

/* 26. Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.
let eded=[7,6,14,63,21,56,49, 71,70,77,28]
for (let i = eded.length; i >=0; i--) {
      if (eded[i]%7==0) {
         console.log("7-ye bolunen sonuncu eded " + eded[i]);   
         break
      }
      
}*/


/* 27. Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin

let ededler= [1,3,6,2,7,4,9]
console.log(ededler);

function func(arr) {
    if (arr.lenght< 2) return arr;
        let min= 0;
        let max= 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min= i;
        }
        if (arr[i] > arr[max]) {
            max= i;
        }
    }
    let temp= arr[min];
    arr[min]= arr[max];
    arr[max]= temp;
    return arr;    
}
let result= func(ededler);
console.log(result);
*/

 /*28. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət
string ifadə yaradın (məsələn input:5 output: qeg8d)
    let eded=+prompt("Say daxil edin ")
    let simvols="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let ifade=""
    for (let i = 0; i < eded; i++) {
      let rnd=Math.round(Math.random()*simvols.length)
      ifade+=simvols[rnd]
    }
    console.log(ifade);*/

    /*29. 1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin
for (let i = 1; i <= 100; i++) {
      // Ədədin təkliyinin 1 olduğunu yoxlayırıq
      if (i % 10 == 1) {
        console.log(i);
      }
    }*/


/* 30.Daxil olunmuş ifadənin polindrom olduğunu yoxlayın.   (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)
function palind(result) {
    result= result.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed= result.split('').reverse().join('');
    return result=== reversed;
}
console.log(palind("yay"));
console.log(palind("121"));
console.log(palind("1331"));
console.log(palind("4554"));
console.log(palind("salam"));*/

/*31.	Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)
let soz1="solo"
let soz2="oslo"
let soz1_split=soz1.split("")
let soz2_split=soz2.split("")
soz1_split.sort()
soz2_split.sort()
let count=0
if(soz1.length!=soz2.length ||  soz1==soz2){
    console.log("anagram deyil");
}else{
    for(let i=0;i<soz1.length;i++){
        if(soz1_split[i]==soz2_split[i]){
            count++
        }
    }
    if(count==soz1.length){
        console.log("anagram");
    }else{
        console.log("anagram deyil");
}
}*/

/*32. Daxil olunmuş mətndə saitləri silən proqram yaradın
let saitler=/["aıoueəiöü"]/g
let metin1="Bu bir nümunə mətindir"
let netice1=metin1.replace(saitler, '')
console.log(netice1);*/

/*33. İstifadəçi daxil edən ədəd sayda ixtiyarı(random) simvoldan ibarət
string ifadə yaradın (məsələn input:5 output: qeg8d)
    let eded=+prompt("Say daxil edin ")
    let simvols="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let ifade=""
    for (let i = 0; i < eded; i++) {
      let rnd=Math.round(Math.random()*simvols.length)
      ifade+=simvols[rnd]
    }
    console.log(ifade);*/

/*34.Daxil olunmuş sözdə neçə sait və samit olduğunu tapın
function SaitveSamitler(text) {
    const saitler= 'aeiouAEIOU';
    let saitsayi= 0;
    let samitsayi= 0;
    for (let char of text) {
        if (saitler.includes(char)) {
            saitsayi++;
        } else if (/[a-zA-Z]/.test(char)) {
            samitsayi++;
        }
    }
    return { saitsayi, samitsayi };
}
const inputText= prompt("Sozu duzqun daxil edil");

const result= SaitveSamitler(inputText);
console.log(`Saitler: ${result.saitsayi}`);
console.log(`Samitler: ${result.samitsayi}`);*/

/*35.	Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)

let eded=+ prompt("eded daxil edin: ")
let result= 0
for (let i= 1; i< eded; i++){
    if (eded% i== 0){
    result+= i
    }
}
    if (result== eded){
        console.log("mukemmel eded");
    }else {
        console.log("mukemmel eded deyil");
}*/

// 36.Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın

// function ededlerinCemi(reqem) {
//     let sum= 0;
//     let num= Math.abs(reqem);
//     while (num> 0) {
//         sum+= num% 10;
//         num= Math.floor(num/ 10); 
//     }
//     return sum;
// }
// const ededler = parseInt(prompt("Bir eded daxil edin:"), 10);
// if (!isNaN(ededler)) {
//     const ededinCemi = ededlerinCemi(ededler);
//     console.log(`${eded} ededin reqemlerin cemi: ${ededinCemi}`);
// } else {
//     console.log("Duzqun eded daxil edin.");
// }
