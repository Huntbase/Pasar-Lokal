import React, { useEffect, useState } from "react";
import pasarDataDefault from "../../Data/data";
import "./css/admin.css";

const AdminPasar = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});
  const [newForm, setNewForm] = useState({
    nama: "",
    lokasi: "",
    kota: "",
    gambar: "",
    JamOperasional: "",
    GoogleMaps: "",
    type: "pasar",
  });

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem("pasarData");
    if (saved) {
      setData(JSON.parse(saved));
    } else {
      localStorage.setItem("pasarData", JSON.stringify(pasarDataDefault));
      setData(pasarDataDefault);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pasarData", JSON.stringify(data));
  }, [data]);

  const handleEditClick = (pasar) => {
    setEditId(pasar.id);
    setForm(pasar);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNewChange = (e) => {
    setNewForm({ ...newForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedData = data.map((item) => (item.id === editId ? form : item));
    setData(updatedData);
    setEditId(null);
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleAdd = () => {
    const newId = data.length > 0 ? Math.max(...data.map((d) => d.id)) + 1 : 1;
    const newData = { ...newForm, id: newId };
    setData([...data, newData]);
    setNewForm({
      nama: "",
      lokasi: "",
      kota: "",
      gambar: "",
      JamOperasional: "",
      GoogleMaps: "",
      type: "pasar",
    });
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin - Edit & Kelola Pasar</h2>

      {/* Form Tambah Pasar */}
      <div className="add-form">
        <h3>Tambah Pasar Baru</h3>
        <input
          name="nama"
          value={newForm.nama}
          onChange={handleNewChange}
          placeholder="Nama Pasar"
        />
        <input
          name="lokasi"
          value={newForm.lokasi}
          onChange={handleNewChange}
          placeholder="Lokasi"
        />
        <input
          name="kota"
          value={newForm.kota}
          onChange={handleNewChange}
          placeholder="Kota"
        />
        <input
          name="gambar"
          value={newForm.gambar}
          onChange={handleNewChange}
          placeholder="Link Gambar"
        />
        <input
          name="JamOperasional"
          value={newForm.JamOperasional}
          onChange={handleNewChange}
          placeholder="Jam Operasional"
        />
        <input
          name="GoogleMaps"
          value={newForm.GoogleMaps}
          onChange={handleNewChange}
          placeholder="Link Google Maps"
        />
        <button className="admin-button" onClick={handleAdd}>
          Tambah Pasar
        </button>
      </div>

      {/* Daftar Pasar */}
      {data.map((pasar) => (
        <div key={pasar.id} className="market-card">
          {editId === pasar.id ? (
            <>
              <input name="nama" value={form.nama} onChange={handleChange} />
              <input
                name="lokasi"
                value={form.lokasi}
                onChange={handleChange}
              />
              <input
                name="JamOperasional"
                value={form.JamOperasional}
                onChange={handleChange}
              />
              <input
                name="GoogleMaps"
                value={form.GoogleMaps}
                onChange={handleChange}
              />
              <button className="edit-btn" onClick={handleSave}>
                Simpan
              </button>
              <button className="delete-btn" onClick={() => setEditId(null)}>
                Batal
              </button>
            </>
          ) : (
            <>
              <h3>{pasar.nama}</h3>
              <p>
                <strong>Lokasi:</strong> {pasar.lokasi}
              </p>
              <p>
                <strong>Jam Operasional:</strong> {pasar.JamOperasional}
              </p>
              <p>
                <strong>Google Maps:</strong>{" "}
                <a
                  className="map-link"
                  href={pasar.GoogleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat
                </a>
              </p>
              <button
                className="edit-btn"
                onClick={() => handleEditClick(pasar)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(pasar.id)}
              >
                Hapus
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminPasar;
