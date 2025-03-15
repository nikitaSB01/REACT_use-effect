export interface UserShort {
  id: number;
  name: string;
}

export interface UserDetails extends UserShort {
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}
