import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./css/admin.css";

const AdminPasar = () => {
  const navigate = useNavigate();

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const pasarCollection = useMemo(() => collection(db, "pasar"), []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(pasarCollection);
      const pasarList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(pasarList);
      setError("");
    } catch (err) {
      setError("Gagal mengambil data pasar.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [pasarCollection]); // ✅ sekarang ini tidak error lagi

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const handleSave = async () => {
    try {
      setLoading(true);
      const pasarRef = doc(db, "pasar", editId);
      await updateDoc(pasarRef, form);
      setEditId(null);
      setError("");
      fetchData();
    } catch (err) {
      setError("Gagal menyimpan perubahan.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const pasarRef = doc(db, "pasar", id);
      await deleteDoc(pasarRef);
      setError("");
      fetchData();
    } catch (err) {
      setError("Gagal menghapus pasar.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    try {
      setLoading(true);
      await addDoc(pasarCollection, newForm);
      setNewForm({
        nama: "",
        lokasi: "",
        kota: "",
        gambar: "",
        JamOperasional: "",
        GoogleMaps: "",
        type: "pasar",
      });
      setError("");
      fetchData();
    } catch (err) {
      setError("Gagal menambahkan pasar.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Kembali
      </button>
      <h2 className="admin-title">Admin - Edit & Kelola Pasar</h2>

      {loading && <p>Memuat data...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="add-form">
        <h3>Tambah Pasar Baru</h3>
        {[
          "nama",
          "lokasi",
          "kota",
          "gambar",
          "JamOperasional",
          "GoogleMaps",
        ].map((field) => (
          <input
            key={field}
            name={field}
            value={newForm[field]}
            onChange={handleNewChange}
            placeholder={field}
          />
        ))}
        <button className="admin-button" onClick={handleAdd} disabled={loading}>
          Tambah Pasar
        </button>
      </div>

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
              <button
                className="edit-btn"
                onClick={handleSave}
                disabled={loading}
              >
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
                disabled={loading}
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
