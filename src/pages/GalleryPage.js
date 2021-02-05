import React, { useState, useEffect } from "react";
import memesActions from "../redux/actions/memes.actions";
import { useDispatch } from "react-redux";

const GalleryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(memesActions.getMemes()), [dispatch]);
  return <div>Gallery</div>;
};

export default GalleryPage;
