# Hamming Error-Correcting Code Simülatörü
## Hamming Code Nedir
Hamming Error-Correcting Code, Richard Hamming tarafından 1950 yılında geliştirilen ve dijital iletişim sistemlerinde yaygın olarak kullanılan bir hata düzeltme kodlama yöntemidir. 
Hamming kodları, verinin doğruluğunu sağlamak ve hata durumunda veriyi düzeltmek için ek bilgi (parite bitleri) ekleyerek çalışır. Bu kodlama yöntemi, belirli bir hata durumunu tespit edebilme ve düzeltme yeteneği ile tanınır.
## Hamming Kodu Nasıl Çalışır?
Hamming kodları, veriyi ve eklenen parite bitlerini birleştirerek bir kod kelimesi oluşturur. Bu parite bitleri, veri bitlerinin belirli kombinasyonlarının eşitliğini kontrol eder. 
Hamming kodları, tek bir bit hatasını hem tespit edebilir hem de düzeltebilir. Bu, özellikle verinin güvenilirliğinin kritik olduğu uygulamalarda önemlidir.

## Hamming Kodunun Genel Yapısı
Bir Hamming kodunun oluşturulması şu adımları içerir:
1. Veri Bitlerini Belirleme: İlk olarak, göndermek istediğiniz veri bitlerini belirleyin.
2. Parite Bitlerini Eklemek: Veri bitlerinin belirli pozisyonlarına parite bitleri ekleyin. Parite bitlerinin sayısı ve konumu, kullanılacak olan Hamming kodunun türevine göre değişir. 
3. Parite Bitlerini Hesaplama: Her bir parite biti, belirli bir veri bitlerinin kombinasyonunun eşitliğini kontrol eder.

* [Hamming Error-Correcting Code Simülatörü](https://yusuf-guney.github.io/HammingCode-Simulator/) - Yandaki linkten Hamming Code Simülatörüne ulaşabilirsiniz.
* [Hamming Error-Correcting Code Simülatörü videosu]([https://youtu.be/yLfr3xsBq5k](https://www.youtube.com/watch?v=pcRtn8Rx_kk)) - Programın çalışmasına gösteren örnek videoya da yandaki linkten ulaşabilirsiniz
## Programın Arayüz Taıntımı
Bu uygulamanın arayüz ekranı, kullanıcıların Hamming kodunu hesaplayıp hataları tespit ve düzeltmelerine olanak tanıyan etkileşimli bir panel sunar. Kullanıcı, veri bitlerinin uzunluğunu (4, 8, 16) seçip ardından veri bitlerini girebilir. Hamming kodunu hesaplamak için bir buton, Hamming koduna hata eklemek için bir başka buton ve hataları tespit ve düzeltmek için üçüncü bir buton bulunur. Hamming kodu hesaplandığında veya hata eklendiğinde, sonuçlar ekranda metin olarak görüntülenir. Arayüz ayrıca öğrenci bilgilerini ve bir GitHub bağlantısını içerir. 

## Kullandığım Dil 
Programı Html Css ve Javascript dillerini iç içe kullanarak hazırladım. 
## Örnek Kod Görseli
![](Örnek_Ekran_Görüntüsü.png)
