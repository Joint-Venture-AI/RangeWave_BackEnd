import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StripeService } from "./stripe.service";

const createAndConnect = catchAsync(async (req: Request, res: Response) => {
  const result = await StripeService.createAndConnect(req.user.userEmail);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Success",
    data: result,
  });
});

const savePaymentData = catchAsync(async (req: Request, res: Response) => {
  const result = await StripeService.savePaymentData(req.body, req.user.userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Success",
    data: result,
  });
});

const refundPayment = catchAsync(async (req: Request, res: Response) => {
  const result = await StripeService.refundPayment(req.body.bidId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Success",
    data: result,
  });
});

const saveExtraWorkPayment = catchAsync(async (req: Request, res: Response) => {
  const result = await StripeService.saveExtraWorkPayment(
    req.body.sId,
    req.body.txId
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Success",
    data: result,
  });
});

export const StripeController = {
  createAndConnect,

  savePaymentData,
  refundPayment,
  saveExtraWorkPayment,
};
