import { useEffect, useState } from "react";
import { UserShort, UserDetails } from "../types";

interface DetailsProps {
  info: UserShort;
}

const Details = ({ info }: DetailsProps) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [info.id]);

  if (loading) return <div className="details">Loading...</div>;
  if (!user) return null;

  return (
    <div className="details">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>City: {user.details.city}</p>
      <p>Company: {user.details.company}</p>
      <p>Position: {user.details.position}</p>
    </div>
  );
};

export default Details;
