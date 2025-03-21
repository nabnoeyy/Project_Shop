import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/Store"; // ✅ ใช้ Zustand 

const products = [
  { id: 2, name: "ชามะลิลิ้นจี่", description: "", price: 20, image: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/480263832_932923162332751_269823990741143264_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1A6ZoLBaL1xwJJ7AgXitdcwph-vKw1eNzCmH68rDV40tNDvg6TkBsHRLXFqFlQzWyIjle6o4N0KflBIgV4EBz&_nc_ohc=QMJygSOItykQ7kNvgGZIUZ8&_nc_oc=AdnqfdCEb9joDF0Rs_u43a8FtwjdYP8qwGnKfZE5l20gx8HaGjiFIImeycRK5_rAGHc&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=_AJpXrVQq4_Mk1HObLrK5g&oh=00_AYEFS6tDI5_otdoEdzKszvK4h1bnu_PJ0bZUHtDSEYo8Sw&oe=67E2B2D2", menuid: 2 },
  { id: 2, name: "ชามะลิน้ำผึ้ง", description: "", price: 20, image: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/480333249_932923282332739_1713317788841528184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHndsUpUZspFNtSbcvszsrJjH5a1uKSRtGMflrW4pJG0fKyYZY2l7pkrI1t2XwlUP70CCe3MUeBexQxgcEVgXLH&_nc_ohc=DxgR5eN_1c0Q7kNvgEk5LlK&_nc_oc=AdlepNS9KvhiEWr_sDQNAXHp3lVr6Umc8OPESN7WjlGqZxhFrQQhLJEP1NQpOnZKJQ8&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=2Gg4RmIOviGNVZ1rZdXlbg&oh=00_AYGuHhND_DwELoyc0O7oyIDSi0kOmS6urSWyBSNlsWJKxg&oe=67E2A7A2", menuid: 2 },
  { id: 2, name: "ชามะลิ", description: "", price: 20, image: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/480296380_932923238999410_2844302708669606942_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFwHDUYqgktpzuk_HipBIDqwtm_LFC8UL7C2b8sULxQviJ3Ex67_vSC-OmRicsmYI9_rvsUjjkV4p3MollrlGpc&_nc_ohc=ckobV2abAb4Q7kNvgGCoXUg&_nc_oc=AdnUIKijZuyJMEUj-IHUhbCJweOKCT42JaOs_sxAC0h21ckJIWGCpebtTBxXBoQmk6k&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=1xFkMTM8t6ISzcmLqGf2Mw&oh=00_AYENJvBPTi1CKhcskC3qibmksHmJKmAeusX8271sx4LxTw&oe=67E2AF29", menuid: 2 },
  { id: 2, name: "ชามะลิแอปเปิ้ล", description: "", price: 20, image: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/480310151_932923122332755_2487489935026062425_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHvQKwK7gt43cJwFv-39FXpt2zBo5f7csW3bMGjl_tyxf1iFrs_QyJ8yReVkqJVMz-sO48x01JOx7Lq8oSzQARB&_nc_ohc=ebsE6mySkHoQ7kNvgHl6Pp1&_nc_oc=AdkxRDLp8p8Ia5lEFHpE6hoOEGpIIuRhOwlXcbIUhPfGvuD6u8vLC4Hl5eYg8T7AGyM&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=vqBINh2piPR06nTX7S-xvA&oh=00_AYGiEj1sa2C5F4jqMd6iJQPPlLMHtbeBar_E8DFojlGMhA&oe=67E2A010", menuid: 2 },
  { id: 2, name: "ชามะลินม", description: "", price: 20, image: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/480502742_932923285666072_678849484263063835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFxw79ULSrNszUSWg-pKv86n-rEH1zhLSWf6sQfXOEtJWWHH3Tg1XcX5IRuVaXHHMKQuQDpfgySzLtxjZXaIQgT&_nc_ohc=pu5vRSfwu7AQ7kNvgFig7x5&_nc_oc=AdnwooQeESb4gZ61d8cylPPxg-qV3KQYnl4xQzPlssOfw4KDDsZ6BezE-C0de9q4j0c&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=YglvKUzo266JZVxhlIQzfw&oh=00_AYGDlXygxK4jgbcJe26PCiunW4k6eGrgMqi0QlwTykK6LQ&oe=67E2C823", menuid: 2 },
  { id: 2, name: "ชามะลิสตรอเบอร์รี่", description: "", price: 20, image: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/480360555_932923235666077_3568498567578836019_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECKIKEVsoNRyzG-iLWZaHdJ-stVsxpSJEn6y1WzGlIkfcA__TYqQlocumk-Q1Y5QOWxwJMWMizdbCR3kNRFLLG&_nc_ohc=VeH7c-BL4SYQ7kNvgE0CeM7&_nc_oc=AdklNohkjGIkb4PTQPiDP1WclbVOQKlyDXrOFBqhMroeEOApMMurXuvnpANMs_D47j4&_nc_zt=23&_nc_ht=scontent.fbkk17-1.fna&_nc_gid=9cswhRc2OPbAahF-poEN-g&oh=00_AYHS-qXplI8eS2YeysWf3X2aDLGZNx8hmK1cjh350CQHkg&oe=67E29929", menuid: 2 },
  
  { id: 2, name: "ชาเขียวนม", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b899e0b8a1-13.png", menuid: 2 },
  { id: 3, name: "มะพร้าวน้ำหอมนมชาไทย",price: 35, image: "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/481272340_1042852204529810_2624159658094715279_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMFX4I1WNVKv2KoBPVDGH8ZhcLGKE3JEVmFwsYoTckRajdsyPXGfb7CDnCp72nErCcW5v1OHRfMWuP_Douo2ll&_nc_ohc=N9jGq-i_fIYQ7kNvgGcDvZZ&_nc_oc=AdkqJXbH7Y_OArYcbQr3s1N-T-VzKgGhYasSAf_hxMyuLnZjsI1hcS2fDcuM_05Bj-TkbP2qoLMBz_mjY4oL6Yy3&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=eY0t_qxzBzi2XzDBRCIU0Q&oh=00_AYG1ybr3atMjz08rA_Rc_QdjdKCha_Pyv9MW1Q_CJ6sF1w&oe=67E20F9D", menuid: 2 },
  { id: 3, name: "ชาไทย", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b984e0b897e0b8a2-13.png", menuid: 2 },
  { id: 4, name: "ชาโกโก้", description: "", price: 25, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b982e0b881e0b982e0b881e0b989-13.png", menuid: 2 },
  { id: 5, name: "ชานมไต้หวัน", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b899e0b8a1e0b984e0b895e0b989e0b8abe0b8a7e0b8b1e0b899-13.png", menuid: 2 },
  { id: 6, name: "ชาเนสที", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b899e0b8aae0b897e0b8b5-13.png", menuid: 2 },
  { id: 7, name: "ชามะนาว", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b8a1e0b8b0e0b899e0b8b2e0b8a7-13.png", menuid: 2 },
  { id: 6, name: "มันม่วง&เมล่อน", description: "", price: 35, image: "https://th.bing.com/th/id/OIP.ru1QwcuCQHFI4WsOsC6HVgHaHa?rs=1&pid=ImgDetMain", menuid: 2 },
  { id: 7, name: "นมแคนตาลูป", description: "", price: 20, image: "https://th.bing.com/th/id/OIP.SQ0s68wTnWFdUUK1Kh8aagHaHa?rs=1&pid=ImgDetMain", menuid: 2 },
  { id: 8, name: "ชาดำ", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b894e0b8b3-13.png", menuid: 2 },
  { id: 9, name: "ชาเขียวใส", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b983e0b8aa-13.png", menuid: 2 },
  { id: 10, name: "ชาเขียวน้ำผึ้งมะนาว", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b899e0b989e0b8b3e0b89ce0b8b6e0b989e0b887e0b8a1e0b8b0e0b899e0b8b2e0b8a7-13.png", menuid: 2 },
  { id: 11, name: "ชาเขียวมะนาว", description: "", price: 20, image: "https://hopchafe.co.th/wp-content/uploads/2025/03/e0b88ae0b8b2e0b980e0b882e0b8b5e0b8a2e0b8a7e0b8a1e0b8b0e0b899e0b8b2e0b8a7-13.png", menuid: 2 },
  { id: 12, name: "มะนาวโซดา",  price: 20, image: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/472713853_1003328651815499_952268243015020466_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFtdR1bJatvS-Fti6-gT_DTtUTcHTXSLHK1RNwdNdIschN5F4MslVriMZ2EFZjVr3GmB9DnG5pDTdXID_BNf04c&_nc_ohc=d9yCJkLAwgMQ7kNvgHjX1KJ&_nc_oc=Adkuixrqf2Gfe0kQaZ1Vvd29WAkYpY7rUQ77EBJOX7VTsQx78JUNlVBZAcsAipskwmsC-K-bzGiTo_sh3vgeorQM&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=UKQ_ZNL3G5etk2iL79pVfQ&oh=00_AYF5llHfrIMSYZzrzw2pPrI8aO3nfogSBUdZ3iZqqpyHMg&oe=67E21713", menuid: 1 },
  { id: 11, name: "เสาวรสโซดา",  price: 20, image: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/480685184_1035293908618973_1819902830497469556_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGdeMM2cc3n2HkORxb2Zk25BJc_7Bo9TUwElz_sGj1NTF82YecpLWM-9lB5HWvwSlYQGkhJEzLr69XwHXOSCJxG&_nc_ohc=z113zgGEOUQQ7kNvgE2Cxd3&_nc_oc=AdmkxHysQAj2YfV0q66qv2L15RDY-5pt1i5V-qUktx4q9Xn0LzBdd6D6rvcbkNY-aQTmrdRBOCXcPhMCX2mUTe94&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=D8VyiGLSakTCAOca3fWFfQ&oh=00_AYEb8Z8PXCLApdpIsTkLKEsY1SKOop_pfCY6NUfmLX_2QQ&oe=67E1F5FC", menuid: 1 },
  { id: 11, name: "ลิ้นจี่โซดา",  price: 20, image: "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/470204875_986632863485078_9087179327670486257_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHB1Fp4Tc0XfG9IqntbGWzRK39y0Dhjkdsrf3LQOGOR2_3D4blvQFo9iztKbhigZQp0lP3yxQe3p9r8P5p7L4Tv&_nc_ohc=zmTFlVEF06gQ7kNvgGs7Bd4&_nc_oc=AdlcINDsvOHa6S5RoIXb7eDiMo2wsayvE0Vv8dFCpfwNTJs_UN8hfNpR_c3Y2d9xwtcyqNGgUNwHv43frvq2_9bW&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=_EbskTbY_r4ZcUpi_Io24A&oh=00_AYG0nqsJIYevgzCFxpijmpJQmUHSES4cFkzBtG07KlEIyQ&oe=67E1F793", menuid: 1 },
  { id: 11, name: "สตอเบอร์รี่โซดา",  price: 20, image: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/473192505_1007516088063422_3931868220061191488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1i6NXG1VRVagUYXP1gEw3QZsb65m8N91Bmxvrmbw33dOc_5b1D6TtZJy1euw1Nob6P9d0e5X0dltYfauHTMjr&_nc_ohc=rQc0ltJdFnkQ7kNvgF2z1Uy&_nc_oc=Admx-QhEG6VbUHBcWHoVi5SkBStoycBq1We1PBYcgDQ1Mhu-O6jHSsayP17DAyPGYsqcQMQyMFlJAwJxQhnT-Kxv&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=J7Ne579_qyKtakEintTKgA&oh=00_AYH_HcJaLtGT8ncOmuTARraiUMriT410_1Gzyq4S4LSyJg&oe=67E205C7", menuid: 1 },
  { id: 11, name: "นมสดบราวน์ชูก้า",  price: 20, image: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/474081521_1009775981170766_4129808273638990825_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGEHNM3y9vdhwEI1JghvXj-Zk9M5Tu6wVxmT0zlO7rBXDdoxj10t01Ok2_dWLtyPfWmzCbQkYAYGHVQasKxKzKq&_nc_ohc=3VVCMG4CV3cQ7kNvgH6weg-&_nc_oc=AdnXRPodYlRSUGROfzZ-KvkuSmmoM-KQk8qWpkjLgnihpSc_UF88FZogHsgiKA3y-bGfeqKqER41NldmUp5CpE6p&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=NVIQ08mLOOHIQoFqoonh_g&oh=00_AYGB7_MEgE2kFDaqrD2iwYamsHoLkW1whmbIIjD137tLXQ&oe=67E209BF", menuid: 4 },
  { id: 11, name: "ชาไต้หวันบราวน์ชูก้า",  price: 25, image: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/475526576_921393446819056_2748918843765279354_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFAVjyI9Wy21zLepHgj9mVWqa0_euocjJCprT966hyMkByYsY_VEVlvNeRVCRvnahvMUQwi33CfOzeOYfWIWjMO&_nc_ohc=kRypUHBuu5oQ7kNvgHtG5MQ&_nc_oc=AdkhbwZamQmM3RA7P2wWfxnw9XRoQMqPQE63x1zI28O_lrT-GChh7xpo1JwKDTIyN9w&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=MzHWnwYlLn5jgi6sh24kSg&oh=00_AYGD4ZZno3xNgCqoQTivPA0mZIb9ZmaSdonnJq5Wuk-LgA&oe=67E2BFF2", menuid: 4 },
  { id: 11, name: "ชาเขียวบราวน์ชูก้า",  price: 25, image: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/475669123_921393400152394_3110322814428654154_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFyJ9ROBDDb_hL5oSnjcJmwZzKxsUfULPNnMrGxR9Qs81kEdXqvpD-YdchBZfq6Jkf5Doyr8DBujeDQgAc-QwTv&_nc_ohc=r3QdeGC03ZkQ7kNvgF2Rybz&_nc_oc=AdmjrAVOkExsFK-c0wh3Xzt4-fs3Nz6EWjrXgwWQeZKHY2uD3_Xbc3dWl0btokCgB3U&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=0kJ9Tg8xIxNVFavvnHkwMg&oh=00_AYGFt5EiUHuZAoJmAR4sQ4UTtTIPpB5O3pSsCrcVJ-TA2A&oe=67E2C110", menuid: 4 },
  { id: 11, name: "นมเหนียวโกโก้",  price: 40, image: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/481928578_1046555580826139_2338003435032401627_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEQpFd9qeaaC-5o8JuSkfM2gt2UmRBC-vSC3ZSZEEL69B1RPeyVra_BuIb-w-CfZfQqccmAqTTJqqmqHsh45LHk&_nc_ohc=dYsmW1yUpCMQ7kNvgHmIsMH&_nc_oc=AdlTK-7PqlBrOP-3UG4faF2eWY2IJeZRLcFPy_8vqLzyRxetkni0eN8sm61BRyBAJlKGorbx-DwR2dzBFQnD2TcT&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=ANCpqUJodG9lYtSrsDMv5A&oh=00_AYEDZx4kPFFsQFqVT6TbFNrgUNZadsZSm1EHsZ1grH7RpA&oe=67E1F689", menuid: 4 },

  { id: 11, name: "ชาชีสเสาวรส",  price: 25, image: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/482272218_122114374502761919_4345401237541320310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFZYEulEvcha3hr1WDdU5EvXdsRPZPtnKFd2xE9k-2coZCE6cJ8qPe6O09y-FGUzvZqGIgPlgqtEtDt8qdvP_Jj&_nc_ohc=Rsp7rYV5_2kQ7kNvgFSUKHa&_nc_oc=Adn5s219NvC_6F9xTLz7_IUQBkWrq5sSs24exx-o-ykAVRbYMFqoWxJBPZ92EPpLlWU&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=3Hr1nAhaZxBsrmHg2VGh1w&oh=00_AYHTFsOjnZ296XOBpL7ZY7O1gfvn6K-dTuiBzQvIQAw31w&oe=67E2C85A", menuid: 3 },
  { id: 11, name: "ชาชีส สตรอเบอรี่",  price: 25, image: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/484032634_122114374442761919_952391268527456516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3H_24Gjkq8Djj_n9NB4EWHfKXCA-kgsgd8pcID6SCyLpY-WrVwR53cufY5ENmz_zf0FZ91hZSC0RLGuAl6i2R&_nc_ohc=7bAI0ql4vNwQ7kNvgEeCDdC&_nc_oc=AdnOmxvRBNIAczMs4st9_evRjXU6OR_AWSfTUpxQe5XA4H1SKs_e2FyHvQr3nckbIAk&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=vHWkuJTs8jYnpxxk38MMJQ&oh=00_AYF0HZIN9sbdaNCYRn_4A_1eaIxgmmVnxnPrntUc0lcmfA&oe=67E2A4ED", menuid: 3 },
  { id: 11, name: "ชาชีสลิ้นจี่",  price: 25, image: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/482342808_122114374382761919_1341438658140912507_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwlVro_D78qMccDwzolcHWh9DYRI2WwaCH0NhEjZbBoOWUf1TQaVWvWPI1A-_uRoKRM5gOyN-2bM9KAeEM51yi&_nc_ohc=gFVZiV70VJMQ7kNvgFBnEnX&_nc_oc=Admv2CRhmHh9H5XJ4VbjEEdiISGEsGwGMEf3JP1HX28jyJ-vhjcMcq95ncNAoYeYkpU&_nc_zt=23&_nc_ht=scontent-bkk1-2.xx&_nc_gid=qCjc0zxzP4uWWkDa3TyO4Q&oh=00_AYGdZgDb9aawK-cl-uQj4sxziRiwPtfZlf3fDTzDFSV-cw&oe=67E2B512", menuid: 3 },
  { id: 11, name: "ชาชีส(พีช) ลิ้นจี่",  price: 25, image: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/482344460_122114374340761919_8159697477786465130_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFkes4DZUtJbkrCajDa51h-TzxRfnCz9gNPPFF-cLP2A4dK83nWq5NIeghx1i-5oDPuz7A4Gq8zD2G6nnufN6FL&_nc_ohc=Z23gB4xoIYgQ7kNvgFsaSGh&_nc_oc=AdlycU48qBeNDVGGov-GM29-ZckFuTqThlvH8_uG4sH9XPpweNaOJ6ZVSMh06nZHJDg&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=41Szlc-t4qfBwi0bq7GLHA&oh=00_AYHylNhYzU_oexSwJdXA273q1BaFQWLixD6wEAc5TUbASw&oe=67E2B605", menuid: 3 },


];


const toppings = [{ name: "บุก", price: 10 }, { name: "เฉาก๊วย", price: 5 }, { name: "วิปครีม", price: 15 },{ name: "ชีส", price: 15 }];
const sweetnessLevels = ["ไม่หวาน", "หวานน้อย", "ปกติ", "หวานมาก"];

const Product = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sweetness, setSweetness] = useState("ปกติ");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ ดึงฟังก์ชัน addToCart จาก Zustand
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const filteredProducts = products.filter((item) => item.menuid === parseInt(id));
    setProductList(filteredProducts);
  }, [id]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setSweetness("ปกติ");
    setSelectedToppings([]);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) =>
      prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
    );
  };

  const calculateTotal = () => {
    const toppingCost = selectedToppings.reduce((sum, topping) => {
      const toppingData = toppings.find((t) => t.name === topping);
      return sum + (toppingData ? toppingData.price : 0);
    }, 0);
  
    
    return (selectedProduct?.price + toppingCost) * quantity;
  };

  const handleAddToCart = () => {
    const total = calculateTotal();
    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      price: selectedProduct.price,
      sweetness,
      selectedToppings,
      quantity,
      total,
    };

    // ✅ ใช้ Zustand เพิ่มสินค้าไปยังตะกร้า
    addToCart(cartItem);
    console.log("Cart updated:", useCartStore.getState().cart);

    closeModal();
  };

  return (
    <section className="product-container">
      <h2>Menu</h2>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-footer">
              <span className="price">฿ {product.price}</span>
              <button className="cart-button" onClick={() => openModal(product)}>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
            <h2>HOP CHAFE {selectedProduct.name}</h2>

            <div>
            <fieldset className="fieldset">
  <legend className="fieldset-legend">ระดับความหวาน</legend>
  <select value={sweetness} onChange={(e) => setSweetness(e.target.value)} className="select">
    {sweetnessLevels.map((level) => (
      <option key={level} value={level}>
        {level}
      </option>
    ))}
  </select>
  <span className="fieldset-label"></span>
</fieldset>

  {/* เลือกท็อปปิ้ง */}
  <fieldset className="fieldset">
    <legend className="fieldset-legend">เลือกท็อปปิ้ง</legend>
    <select
      defaultValue=""
      className="select"
      onChange={(e) => setSelectedToppings([...selectedToppings, e.target.value])}
    >
      <option value="" disabled>
        กรุณาเลือกท็อปปิ้ง
      </option>
      {toppings.map((topping) => (
        <option key={topping.name} value={topping.name}>
          {topping.name} (+฿{topping.price})
        </option>
      ))}
    </select>
    <span className="fieldset-label"></span>
  </fieldset>



 {/* จำนวน */}
<fieldset className="fieldset">
  <legend className="fieldset-legend">จำนวน</legend>
  <div className="quantity-controls">
    <button 
      onClick={() => setQuantity(Math.max(1, quantity - 1))} 
      className="btn btn-sm"
    >
      -
    </button>
    <span className="quantity-display">{quantity}</span>
    <button 
      onClick={() => setQuantity(quantity + 1)} 
      className="btn btn-sm"
    >
      +
    </button>
  </div>
  <span className="fieldset-label"></span>
</fieldset>

</div>

              <h3>ราคารวม: ฿ {calculateTotal()}</h3>

              <button className="confirm-button" onClick={handleAddToCart}>เพิ่มลงตะกร้า</button>
              <button className="close-button" onClick={closeModal}>ปิด</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
