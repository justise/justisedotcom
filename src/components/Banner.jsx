export default function Banner() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundColor: '#000',
        backgroundImage: "url('/images/header-narrow.webp')",
        height: '600px',
      }}
    >
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Kris Gray</h1>
            <h4 className="mb-3 banner-subtitle">My little corner of the world</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
