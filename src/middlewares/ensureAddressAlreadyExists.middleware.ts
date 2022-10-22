import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Addresses } from "../entities/addresses.entity";
import { AppError } from "../errors/appError";
import { IAddressRequest } from "../interfaces/properties";

const ensureAddressAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const address: IAddressRequest = req.body.address;
  const addressRepository = AppDataSource.getRepository(Addresses);
  const findAddress: any = await addressRepository.findOneBy(address);

  if (findAddress) {
    delete findAddress.id;

    if (JSON.stringify(address) === JSON.stringify(findAddress)) {
      throw new AppError("Address already exists");
    }
  }

  if (address.zipCode.length > 8) {
    throw new AppError("Invalid zipCode");
  }

  if (address.state.length > 2) {
    throw new AppError("Invalid state");
  }

  return next()
}

export default ensureAddressAlreadyExistsMiddleware;