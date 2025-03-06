import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/admin.css";

const API_URL = "http://localhost:5000/markets";

const AdminPasar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login"); // Redirect jika belum login
    }
    fetchMarkets(); // Ambil data dari backend saat halaman dimuat
  }, [navigate]);

  const [markets, setMarkets] = useState([]);
  const [form, setForm] = useState({
    id: "",
    nama: "",
    lokasi: "",
    kota: "",
    gambar: "",
    JamOperasional: "",
    GoogleMaps: "",
    type: "pasar",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Ambil data pasar dari backend
  const fetchMarkets = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      const data = await response.json();
      setMarkets(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Gagal memuat data pasar!");
    }
  };

  // Tangani perubahan input form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Tangani submit (tambah/edit data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${form.id}` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Gagal menyimpan data");
      }

      fetchMarkets(); // Refresh daftar pasar setelah tambah/edit
      setForm({
        id: "",
        nama: "",
        lokasi: "",
        kota: "",
        gambar: "",
        JamOperasional: "",
        GoogleMaps: "",
        type: "pasar",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan saat menyimpan data!");
    }
  };

  // Edit data pasar
  const handleEdit = (market) => {
    setForm(market);
    setIsEditing(true);
  };

  // Hapus data pasar dari backend
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Gagal menghapus data");
      }
      setMarkets(markets.filter((m) => m.id !== id)); // Hapus dari state
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Terjadi kesalahan saat menghapus data!");
    }
  };

  // Logout dan kembali ke halaman utama
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Hapus status login
    navigate("/"); // Redirect ke halaman home
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Admin Pasar</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          name="nama"
          placeholder="Nama Pasar"
          value={form.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lokasi"
          placeholder="Lokasi"
          value={form.lokasi}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="kota"
          placeholder="Kota"
          value={form.kota}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gambar"
          placeholder="URL Gambar"
          value={form.gambar}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="JamOperasional"
          placeholder="Jam Operasional"
          value={form.JamOperasional}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="GoogleMaps"
          placeholder="Google Maps Link"
          value={form.GoogleMaps}
          onChange={handleChange}
          required
        />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="pasar">Pasar Tradisional</option>
          <option value="minimarket">Minimarket</option>
        </select>
        <button type="submit">
          {isEditing ? "Update Pasar" : "Tambah Pasar"}
        </button>
      </form>

      <h3>Daftar Pasar</h3>
      <ul className="market-list">
        {markets.map((market) => (
          <li key={market.id} className="market-item">
            <img
              src={market.gambar}
              alt={market.nama}
              className="market-image"
            />
            <div>
              <h4>{market.nama}</h4>
              <p>
                {market.lokasi}, {market.kota}
              </p>
              <button onClick={() => handleEdit(market)}>Edit</button>
              <button onClick={() => handleDelete(market.id)}>Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPasar;
