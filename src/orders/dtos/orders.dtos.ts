export class CreateOrderDto {
  readonly type?: string;
  readonly name?: string;
  readonly size: string;
  readonly crust: string;
  readonly toppings: string[];
  readonly quantity: number;
  readonly specialInstructions: string;
  readonly status?: string;
  readonly totalPrice?: number;
}
export class UpdateOrderDto {
  readonly type?: string;
  readonly name?: string;
  readonly size?: string;
  readonly crust?: string;
  readonly toppings?: string[];
  readonly quantity?: number;
  readonly specialInstructions?: string;
  readonly status?: string;
  readonly totalPrice?: number;
}
