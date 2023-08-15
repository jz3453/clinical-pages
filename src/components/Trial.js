import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Trial({ TrialId }) {
  return (
    <Link to={`/${TrialId}`}>
      {TrialId}
    </Link>
  )
}