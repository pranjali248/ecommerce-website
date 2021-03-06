import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsOverview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
