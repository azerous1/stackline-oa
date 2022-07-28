import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
        <CircularProgress />
    </div>
  )
}
