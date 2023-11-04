from kütüphane2 import *
print("""
    1.Urun ekleyin
    2.Urun silin
    3.urunleri göster
    4.ürünü sorgula
    5.fiyat sıralaması
    ÇIKMAK için "q" ya basınız...
""")
super_market=Super_Market()
while True:
    islem=input("İşlem giriniz: ")
    if islem=="q":
        print("Uygulamadan Çıkılıyor...")
        time.sleep(1)
        break
    elif islem=="1":
        print("Ürün eklenecek...")
        urun_ismi=input("İsim: ")
        rafbolumu=input("Raf bölümü: ")
        fiyatlari=float(input("Fiyatları: "))
        indirim=int(input("İndirim: "))
        yeni_urun=Ana(urun_ismi,rafbolumu,fiyatlari,indirim)
        super_market.urun_ekle(yeni_urun)
    elif islem=="2":
        urun=input("İsim: ")
        super_market.urun_sil(urun)
    elif islem=="3":
        super_market.urunleri_goster()
    elif islem=="4":
        urun_isim=input("İsim: ")
        super_market.urun_sorgula(urun_isim)
    else:
        print("Yanlı girdiniz")