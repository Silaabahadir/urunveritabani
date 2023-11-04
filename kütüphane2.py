import sqlite3
import time
"""Süpermarket içindeki ürünler üzerinden bir tane Süpermarket Projesi geliştirmeye çalışın."""

class Ana():
    def __init__(self,urun_ismi,rafbolumu,fiyatlari,indirim):
        self.urun_ismi=urun_ismi
        self.rafbolumu=rafbolumu
        self.fiyatlari=fiyatlari
        self.indirim=indirim
    def __str__(self):
        return f"Ürün ismi: {self.urun_ismi}\nRaf Bölümü: {self.rafbolumu}\nFiyat Lİstesi: {self.fiyatlari}\nİndirim: {self.indirim}\n"

class Super_Market():

    def __init__(self):
        self.baglanti_olustur()
    def baglanti_olustur(self):
        self.connect=sqlite3.connect("Kütüphane2.db")
        self.cursor=self.connect.cursor()

        sorgu="CREATE TABLE IF NOT EXISTS urunler(urun_ismi TEXT,rafbolumu TEXT,fiyatları FLOAT,indirim INT)"
        self.cursor.execute(sorgu)
        self.connect.commit()
    def baglanti_kes(self):
        self.connect.close()

    def urunleri_goster(self):
        sorgu="SELECT * FROM urunler"
        self.cursor.execute(sorgu)
        urunler=self.cursor.fetchall()
        for i in urunler:
            urun_ozellikleri=Ana(i[0],i[1],i[2],i[3])
            print(urun_ozellikleri)
    def urun_sorgula(self,urun_ismi):
        sorgu="SELECT * FROM urunler where urun_ismi=? "
        self.cursor.execute(sorgu,(urun_ismi,))
        urunler=self.cursor.fetchall()
        ana=Ana(urunler[0][0],urunler[0][1],urunler[0][2],urunler[0][3])
        print(ana)

    def urun_ekle(self,yeni_urun):
        sorgu="INSERT INTO urunler Values(?,?,?,?)"
        self.cursor.execute(sorgu,(yeni_urun.urun_ismi,yeni_urun.rafbolumu,yeni_urun.fiyatlari,yeni_urun.indirim))
        self.connect.commit()
    def urun_sil(self,urun):
        sorgu="DELETE FROM urunler where urun_ismi=?"
        self.cursor.execute(sorgu,(urun,))
        self.connect.commit()


