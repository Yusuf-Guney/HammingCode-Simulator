// Hamming kodunu saklamak için global değişken
let hammingCode = [];

// Hamming kodunu hesaplama fonksiyonu
function calculateHammingCode() {
    const bitLength = parseInt(document.getElementById('bitLength').value); // Bit sayısını al
    const dataBits = document.getElementById('dataBits').value.split('').map(Number); // Veri bitlerini al
    
    if (dataBits.length !== bitLength) { // Veri bitlerinin uzunluğunu kontrol et
        alert('Veri bitlerinin sayısı seçilen bit uzunluğuna uymalıdır.');
        return;
    }

    // Parite bitlerinin sayısını hesapla
    let r = 0;
    while (Math.pow(2, r) < bitLength + r + 1) {
        r++;
    }


    hammingCode = new Array(bitLength + r).fill(0); // Hamming kodu için dizi oluştur ve sıfırla

    // Veri bitlerini Hamming koduna yerleştir
    let j = 0;
    for (let i = 1; i <= bitLength + r; i++) {
        if ((i & (i - 1)) !== 0) {
            hammingCode[i - 1] = dataBits[j];
            j++;
        }
    }

    // Parite bitlerini hesapla ve yerleştir
    for (let i = 0; i < r; i++) {
        let position = 1 << i;
        let parity = 0;

        for (let j = position; j <= bitLength + r; j += (2 * position)) {
            for (let k = 0; k < position && j + k <= bitLength + r; k++) {
                if (j + k !== position)
                    parity ^= hammingCode[j + k - 1];
            }
        }

        hammingCode[position - 1] = parity;
    }

    // Hamming kodunu ekranda göster
    document.getElementById('hammingCodeOutput').innerText = `Hamming Kodu: ${hammingCode.join('')}`;
}

// Hata ekleme fonksiyonu
function addError() {
    const errorPosition = parseInt(document.getElementById('errorPosition').value); // Hata pozisyonunu al

    if (errorPosition < 1 || errorPosition > hammingCode.length) { // Hata pozisyonunun geçerliliğini kontrol et
        alert('Geçersiz pozisyon!');
        return;
    }

    hammingCode[errorPosition - 1] ^= 1; // Belirtilen pozisyondaki biti değiştir
    document.getElementById('errorOutput').innerText = `Hata eklenmiş Hamming Kodu: ${hammingCode.join('')}`;
}

// Hata tespit ve düzeltme fonksiyonu
function detectAndCorrectError() {
    let r = 0;
    while ((1 << r) < hammingCode.length + 1) r++; // Parite bitlerinin sayısını hesapla

    let errorPosition = 0;

    // Parite bitlerini kontrol et
    for (let i = 0; i < r; i++) {
        let position = 1 << i;
        let parity = 0;

        for (let j = position; j <= hammingCode.length; j += (2 * position)) {
            for (let k = 0; k < position && j + k <= hammingCode.length; k++) {
                if (j + k !== position)
                    parity ^= hammingCode[j + k - 1];
            }
        }

        if (parity) {
            errorPosition += position; // Hata pozisyonunu hesapla
        }
    }

    // Hata olup olmadığını kontrol et ve düzelt
    if (errorPosition === 0) {
        document.getElementById('correctionOutput').innerText = "Hata tespit edilmedi.";
    } else {
        hammingCode[errorPosition - 1] ^= 1; // Hata pozisyonundaki biti düzelt
        document.getElementById('correctionOutput').innerText = `Hata pozisyonu: ${errorPosition}, düzeltilmiş Hamming Kodu: ${hammingCode.join('')}`;
    }
}

// Butonlar için olay dinleyicileri ekle
document.getElementById('calculateButton').addEventListener('click', calculateHammingCode);
document.getElementById('addErrorButton').addEventListener('click', addError);
document.getElementById('detectButton').addEventListener('click', detectAndCorrectError);
