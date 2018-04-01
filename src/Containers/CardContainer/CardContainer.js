import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card";
import PropTypes from "prop-types";

export const CardContainer = props => {
  const movieType =
    props.location.pathname === "/favorites" ? 'favorites' : 'movies';

  const renderCards = props[movieType].map(movie => {
    return <Card key={movie.title} movie={movie} />;
  });
  return <section>{renderCards}</section>;
};

export const mapStateToProps = state => ({
  movies: state.movies,
  favorites: state.favorites,
  user: state.user
});

CardContainer.propTypes = {
  location: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(CardContainer));
