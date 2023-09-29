import { IsNumber, IsString, Min, Max } from 'class-validator';

export class ReviewDto {
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  text: string;
}
