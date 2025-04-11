import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      {/* Bagian Atas - Foto Profil dan Informasi Dasar */}
      <div className="profile-header">
        <img src="/pas foto 11.png" alt="Profile" className="profile-photo" />
        <div className="profile-info">
          <h1 className="name">Rifki Yuliandra</h1>
          <p className="tagline">
            Seorang mahasiswa informatika yang memiliki minat pada teknologi
            yaitu pada Front-End dan Design Grafis.
          </p>
        </div>
      </div>

      {/* Bagian Bawah - Kontak Detail */}
      <div className="contact-details">
        <div className="detail-item">
          <span className="icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <p className="detail-content">+62 858 0513 8605</p>
        </div>

        <div className="detail-item">
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <p className="detail-content">rifkiyuliandra875@email.com</p>
        </div>

        <div className="detail-item">
          <span className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <a
            href="https://instagram.com/username_anda"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-content"
          >
            @username_instagram
          </a>
        </div>

        <div className="detail-item">
          <span className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <p className="detail-content">
            Jl. Palmerah No.5, Air Tawar Timur, Padang
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
