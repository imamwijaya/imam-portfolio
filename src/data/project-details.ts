/** Only substantiated project notes belong here; unknown details are deliberately omitted. */
export type ProjectDetails = { context: string; contribution?: string; notes?: string };

export const projectDetails: Record<string, ProjectDetails> = {
  'pollusafe-app': {
    context: 'Pollusafe membantu pengguna memantau indeks kualitas udara dan informasi lingkungan melalui aplikasi mobile.',
    contribution: 'Kontribusiku berfokus pada pengembangan frontend aplikasi. Pekerjaan tim di luar frontend tidak diklaim sebagai kontribusi pribadiku.',
    notes: 'Repository kolaborasi mencakup antarmuka mobile, peta kualitas udara, dan fitur terkait informasi AQI.',
  },
  'wave-education': {
    context: 'Wave Education adalah platform pembelajaran pemrograman dengan kursus, kuis, dan sistem poin.',
    contribution: 'Aku berkontribusi pada pengembangan frontend web, bukan backend layanan.',
    notes: 'Repository tim menyertakan proyek frontend Flutter Web dan backend secara terpisah.',
  },
  'money-mate': {
    context: 'Money Mate mendukung pencatatan pengeluaran pribadi melalui aplikasi mobile dan website.',
    contribution: 'Kontribusi pribadiku mencakup frontend aplikasi mobile dan frontend website. Pengembangan backend merupakan bagian terpisah dari pekerjaan tim.',
    notes: 'Repository berisi direktori proyek mobile dan website.',
  },
  'badminton-pose-ai': {
    context: 'Riset klasifikasi gerakan bulu tangkis menggunakan pose landmarks dari rangkaian frame video.',
    contribution: 'Mengembangkan dan mengevaluasi pendekatan CNN-LSTM untuk klasifikasi pose dinamis sebagai proyek penelitian.',
    notes: 'Pipeline penelitian memanfaatkan landmark tubuh dan pemodelan dependensi temporal.',
  },
  'xauusd-forecasting': {
    context: 'Penelitian tesis tentang prediksi harga emas XAU/USD pada horizon satu dan tiga hari perdagangan dengan data harga dan sentimen berita keuangan.',
    contribution: 'Merancang metodologi penelitian, persiapan data multimodal, dan eksperimen model TCN dengan fitur sentimen FinBERT.',
    notes: 'Status: penelitian masih berlangsung. Hasil final belum ditampilkan karena belum tersedia.',
  },
};
