import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  accountId?: SortOrder;
  configuration?: SortOrder;
};
