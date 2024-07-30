// single thread
// javascript membaca baris perbaris dan menyelesaikannya satu-per-satu

// multi thread
// thread 1 menjalankan sampai selesai, namun karena berbeda filenya(threadnya) maka thread yang seharusny terdapat di tengah pengeksekusian akan di keluarkan diakhir setelah si thread utama selesai (tergantung waktu yang ditentukan juga) namun secara garis besarnya adalah jika threadnya terpisah maka dapat dikatakan sebagai multi thread dan thread utama akan berjalan bersamaan dengan thread lain

// single dan multi thread = lingkungan pengeksekusian sebuah 'task'

// =================================================================================

// blocking dan non blocking
// jika kita menuliskan console.log lalu baris setelahnya ada fungsi yang kompleks lalu baris berikutnya ada console.log, maka fungsi yang kompleks akan dijalankan sangat lama sehingga tidak dapat menjalankan console.log yang terakhir (seperti pada convert sebuah word ke pdf = kita tidak bisa menginput file lain untuk di convert sampai convert yang pertama selesai)

// teknik ngoding yang menyangkut input dan output (fungsi kompleks dll)

// =================================================================================

// Synchronous
// mengerjakan 1 task lalu akan pindah ke task berikutnya bila sudah selesai dengan task 1 (pengerjaan task satu-per-satu)

// Asynchronous (single-threaded) = concurrency
// jika task 1 sedang dikerjakan, maka task 2 dapat dikerjakan juga dan seterusnya hingga task 1 sudah selesai dan task 2 sudah selesai juga

// Asynchronous (multi-threaded) = parallelism
// mengerjakan banyak task di banyak thread dengan bersamaan

// mirip dengan blocking namun, sync dan async ini berhubungan dengan 'HTTP request'

// concurrency dan parallelism berhubungan dengan 'task'
// =================================================================================

// v8 engine pada browser untuk javascript

// terdapat heap dan stack
// heap berhubungan dengan memory dan stack berhubungan dengan pengeksekusian kode

// jika ada sebuah fungsi pengalian maka isinya akan di tampung di stack sampai fungsinya selesai dieksekusi dan kalau sudah selesai isi di stacknya akan hilang dan menampilkan hasilnya ke layar

// callback
// memungkinkan untuk menjalankan kode setelah suatu operasi selesai baik itu sinkron maupun asinkron, contoh di bawah adalah asinkron karena menggunakan settimeout
console.log('satu')
setTimeout(() => {
    console.log('dua')
}, 5000);
console.log('tiga')
// setimeout termasuk callback, dengan menggunakan settimeout maka yang ditampilkan ke console adalah satu dan tiga lalu setelah 5 detik akan muncul dua dibawah tiga

// Asynchronous callback 
// jika ada sebuah fungsi callback yang menggunakan API otomatis dia akan menggunakan HTTP Request untuk mendapatkan data dan itu akan memakan waktu sesuai dengan kecepatan jaringan, respon dari server serta akses ke database atau dengan settimeout
// sebuah fungsi akan tertampung di stack v8 engine lalu di lempar ke Web API misalkan dengan settimeout namun web api tidak dapat menjalankannya ke stack v8 engine, oleh karena itu ada yang namanya callback queue (antrian), berisi onclick, delay dll, kita ambil contoh menggunakan delay, jika di callback queue terbaca ada antrian maka ada fungsi yang dinamakan event loop yang tugasnya memasukkan antrian callback ke stack v8 (dengan syarat di dalam stack harus kosong dari eksekusi lain)
// itulah mengapa hasil dari callback diatas adalah satu tiga dua, karena untuk menjalaknkan dua, stack harus kosong dan di sini juga menggunakan delay 5 detik, karena settimeout dimiliki oleh web api maka stack melempar settimeout ke web api dan di proses, selama proses dua di 5 detik itu, task 1 yaitu berisi tiga dikeluarkan

// visualisasi dari Asynchronous callback dengan website:
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

