export default function HorseDetaiNav({onChangeLocation}) {
  const local = [];
  const location = [
    {id: 1, location: "서울"},
    {id: 2, location: "제주"},
    {id: 3, location: "부산"},
  ];

  for (let i = 0; i < location.length; i++) {
    const loc = location[i];
    local.push(
      <li key={loc.id}>
        <a
          data-id={loc.id}
          href="#none"
          onClick={function (e) {
            e.preventDefault();
            onChangeLocation(e.target.dataset.id);
          }}
        >
          {loc.location}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ul>{local}</ul>
    </nav>
  );
}
