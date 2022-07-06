interface IVenue {
    id: string,
    name: string,
    contentUrl: string,
    live: boolean,
    direction: string
  }
  
  interface IPick {
    id: string,
    blurb: string,
  }
  
  interface IArtists {
    id: string,
    name: string,
    _id: {oid:string}
  }
  
  export interface IEventData extends Object {
    _id: string,
    title: string,
    flyerFront: string,
    attending: number,
    date: Date,
    startTime: Date,
    endTime: Date,
    contentUrl: string,
    venue: IVenue,
    pick: IPick,
    artists: IArtists[],
    city: string,
    country: string,
    private: boolean,
    __v: number
  }

  export interface IEventList extends Array {
    events: IEventData[] | []
  }