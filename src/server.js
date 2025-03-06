const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let markets = [
  {
    id: 1,
    nama: "Pasar Bogor",
    lokasi: "Jl. Pajajaran",
    kota: "Bogor",
    gambar: "",
    JamOperasional: "08:00-17:00",
    GoogleMaps: "",
    type: "pasar",
  },
];

// Ambil semua pasar
app.get("/markets", (req, res) => {
  res.json(markets);
});

// Tambah pasar baru
app.post("/markets", (req, res) => {
  const newMarket = { id: Date.now(), ...req.body };
  markets.push(newMarket);
  res.json(newMarket);
});

// **Edit pasar berdasarkan ID**
app.put("/markets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = markets.findIndex((m) => m.id === id);
  if (index !== -1) {
    markets[index] = { ...markets[index], ...req.body };
    res.json(markets[index]);
  } else {
    res.status(404).json({ message: "Pasar tidak ditemukan" });
  }
});

// **Hapus pasar berdasarkan ID**
app.delete("/markets/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredMarkets = markets.filter((m) => m.id !== id);
  if (filteredMarkets.length !== markets.length) {
    markets = filteredMarkets;
    res.json({ message: "Pasar dihapus" });
  } else {
    res.status(404).json({ message: "Pasar tidak ditemukan" });
  }
});

// Jalankan server di port 5000
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
