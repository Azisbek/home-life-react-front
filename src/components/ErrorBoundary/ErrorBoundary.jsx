import s from "./ErrorBoundary.module.scss";

export default function CustomErrorBoundary() {
  return (
    <div className={s.container}>
      <h1>Ошибка 404</h1>
      <p>Возможно, запрошенная страница временно недоступона или удалена.</p>
    </div>
  );
}
