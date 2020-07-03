export class ApiKey {
  'access-token': string;
}

export class Feed {
  feed_items: {
    feed_items: FeedItem[];
  };
}

export class FeedItem {
  'id': string;
  'type': string;
  'date': string;
  'publication'?: Publication;
  'count_relation_new'?: number;
  'count_total_relations'?: number;
}

export class Publication {
  _id: string;
  type: string;
  company: Company;
  tags: Tag[];
  content: string;
  comments: Object[];
  likes: Object[];
  shared_job?: {
    _id: string;
    slug: string;
    creator_slug: string;
    start_date: string;
    contract: {
      id: string;
      title: string;
    };
    location: {
      city: string;
      state: string;
      country: string;
    };
    salary: string;
    title: string;
    mission: string;
    profile: string;
    degree: {
      _id: string;
      title: string;
    };
    domaine: string;
    skills: Tag[];
  };
}

export class Company {
  _id: string;
  slug: string;
  name: string;
  tag_line: string;
  logo: string;
  home_tab: {
    description: string;
  };
}

export class Tag {
  _id: string;
  slug: string;
  name: string;
  type: string;
  date_created: string;
  date_modified: string;
}
