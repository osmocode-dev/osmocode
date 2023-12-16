
export interface IJwtToken {
  secret:       string;
  time:         number;
}

export interface IJwtAcess {
  public:       string;
  private:      string;
  time:         number;
}

export interface IJwt {
  access:         IJwtAcess;
  refresh:        IJwtToken;
  // confirmation:   IJwtToken;
  // recovery:       IJwtToken;
}
