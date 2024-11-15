export default function CustomErrorBoundary() {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>Ошибка авторизации</h1>
      <p>Вы не авторизованы. Пожалуйста, войдите в систему.</p>
      <p style={{ color: "red" }}>Error</p>
    </div>
  );
}
