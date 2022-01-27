/* conditional rendering component */
export const NoResultText = (props) => {
  if (props.userData.length > 0 && props.searchResult.length === 0) {
    return <p className="text-center text-4xl">No result found.</p>;
  } else {
    return <></>;
  }
};
