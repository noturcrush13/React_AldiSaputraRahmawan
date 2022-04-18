GraphQL adalah bahasa Query untuk API Anda, dan runtime side-server untuk mengeksekusi query dengan menggunakan sistem tipe yang Anda tetapkan untuk data Anda. GraphQL meminimalkan jumlah data yang perlu ditransfer melalui jaringan. Dengan graphQL kita dapat menggunakan satu endpoint( /graphQL ) untuk setiap permintaan yang diperlukan.

Ada 3 fitur utama dalam GraphQL Client:
1. Query, mendapatkan data berdasarkan query tertentu yang kita definisikan.
2. Mutation, masukkan, perbarui, hapus data.
3. Subscription, mendapatkan data secara realtime.

Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di cloud hasura atau dihosting sendiri.

Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyediakan database postgres gratis.

Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. Library inti @apollo/client menyediakan integrasi bawaan dengan React. Kami menggunakan klien Apollo untuk melakukan operasi GraphQL (query, mutation, dan subscription) di dalam aplikasi React atau Next JS. Klien Apollo bekerja dengan baik dengan server GraphQL (Hasura, Apollo Server, dll)
