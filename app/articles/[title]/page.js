export default function ShowArticlesPage(props) {
  console.log(props.params?.title);
  return (
    <>
      <div>show articles {props?.params?.title}</div>
    </>
  );
}
