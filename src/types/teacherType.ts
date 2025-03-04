export type TypeTeacher = {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
};

export type PickedTeacherInfo = Pick<
  TypeTeacher,
  "name" | "surname" | "lessons_done" | "rating" | "price_per_hour"
>;

export type PickedTeacherOverview = Pick<
  TypeTeacher,
  "languages" | "lesson_info" | "conditions"
>;

export type PickedDetails = Pick<TypeTeacher, "experience" | "reviews">;

export type PickedReviews = Pick<
  TypeTeacher["reviews"][number],
  "reviewer_name" | "reviewer_rating" | "comment"
>;
