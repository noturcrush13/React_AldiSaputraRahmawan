Dengan graphQL kita bisa mendapatkan data yang kita butuhkan. Kami menentukan bidang apa yang ingin kami dapatkan dan graphQL akan memberi kami data berdasarkan apa yang kami definisikan. Misalnya, bayangkan ada satu koleksi dalam database yang menyimpan data film. Semua data yang tidak dibutuhkan seperti directory, create_at dan updated_at tidak akan disertakan dalam hasil.

Kami juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi terkait. Pada contoh di bawah ini, jika kita ingin mendapatkan data direktur kita perlu menggunakan director.id untuk mendapatkan data dari endpoint lain, tetapi dengan graphql kita juga dapat mendefinisikan bidang yang dibutuhkan secara langsung asalkan tersedia di server GraphQL.

Kami juga dapat menggunakan query untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan permintaan jaringan. Gambar jika kita menginginkan data film dan data buku. Dengan REST kita perlu melakukan setidaknya 2 permintaan ke 2 titik akhir yang berbeda. Dengan GraphQL kita bisa melakukan 1 request untuk mendapatkan data tersebut.

Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di cloud hasura atau dihosting sendiri.

Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis.

Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. Library inti @apollo/client menyediakan integrasi bawaan dengan React. Kami menggunakan klien Apollo untuk melakukan operasi GraphQL (query, mutation, dan subscription) di dalam aplikasi React atau Next JS. Klien Apollo bekerja dengan baik dengan server GraphQL (Hasura, Apollo Server, dll)

Mutation pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data. Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql Anda) dan kemudian menentukan data apa yang GraphQL perlu kembalikan.

GraphQL adalah bahasa Query untuk API Anda, dan runtime side-server untuk mengeksekusi query dengan menggunakan sistem tipe yang Anda tetapkan untuk data Anda. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu endpoint( /graphQL ) untuk setiap permintaan yang diperlukan.

Ada 3 fitur utama dalam GraphQL Client:
1. Query, mendapatkan data berdasarkan query tertentu yang kita definisikan.
2. Mutation, masukkan, perbarui, hapus data.
3. Subscription, mendapatkan data secara realtime.