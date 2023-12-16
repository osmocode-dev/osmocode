import { Controller } from "@nestjs/common";
import { CredentialsService } from "./credentials.service";
import { MessagePattern } from "@nestjs/microservices";


@Controller()
export class CredentialsController {

  constructor(
    private readonly credentialsService: CredentialsService,
  ) { }

  @MessagePattern('auth.get.credentials')
  async getByEmail(email: string) {
    return await this.credentialsService.findByEmail(email);
  }

}
