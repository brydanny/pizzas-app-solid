export class CreatePizzaDto {
  readonly name: string;
  readonly toppings: string[];
  readonly size: string;
  readonly price: number;
}
export class UpdatePizzaDto {
  readonly name?: string;
  readonly toppings?: string[];
  readonly size?: string;
  readonly price?: number;
}
