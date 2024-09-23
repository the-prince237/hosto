import React from 'react'
import '@/assets/styles/download-btn.css'

const DownloadBtn = () => {
  return (
    <div className="container">
      <label className="db-label">
        <input type="checkbox" className="db-input" />
        <span className="db-circle"
          ><svg
            className="db-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            ></path>
          </svg>
          <div className="db-square"></div>
        </span>
        <p className="db-title">Télécharger Le Programme</p>
        <p className="db-title">Done !</p>
      </label>
    </div>

  )
}

export default DownloadBtn