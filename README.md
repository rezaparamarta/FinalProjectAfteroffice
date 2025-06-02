# FinalProjectAfteroffice

Final Project Bootcamp Cypress AfterOffice Batch #1

buatlah e2e automation untuk flow:

pesan tiket flight menggunakan agoda.com, dengan ketentuan:
penerbangan dari Jakarta ke singapura
pilih penerbangan paling awal untuk besok (seandainya sekarang tanggal 25 May, pesan untuk 26 May), menggunakan Malaysia airlines
masukkan data penumpang pada halaman passenger detail 
expect total price, data passenger sudah sama seperti saat di halaman passenger detail
expect departure time dan arrival time sama seperti yang dipilih saat memilih penerbangan
Expect datanya dilakukan di page memilih pembayaran (gak perlu bayar)


cari barang menggunakan amazon.com, dengan ketentuan:
Gunakan viewport 1920x1080
Search item ‘chair’
urutkan berdasarkan Harga termahal
pilih item paling kanan dari barisan pertama yang bukan iklan
expect nama barang dan harga  sama seperti yang muncul di search page (untuk harga, tidak perlu expect sampai sen(seperti $100.xx), cukup sampai digit satuan saja)

search video pada youtube.com, dengan ketentuan:
Masuk ke halaman video trending 
Pilih kategori movies pada halaman trending
pilih video trending no.3
di halaman video, expect title, dan youtube channelnya sama seperti yang di page trending

Ketentuan dalam pengumpulan final project:
mengumpulkan tugas, berjalan sampai sukses, dan menyertakan dokumentasi dalam bentuk video (bawaan cypress) 
memberikan hasil dokumentasi dalam bentuk html 
menggunakan POM 
menggunakan environment variable 
dokumen dikumpulkan menggunakan git (opsional)

