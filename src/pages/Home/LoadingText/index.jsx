/* conditional rendering component */
export const LoadingText = (props) => {
  if (props.userData.length > 0) {
    return props.list;
  } else {
    return <p className="text-center text-4xl">Loading...</p>;
  }
};
