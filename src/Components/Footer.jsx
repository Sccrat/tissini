import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";

export function Footer() {
  return (
    <>
      <Col md={{ span: 3, offset: 4 }}>
        <Button
          style={{
            position: "fixed",
            zIndex: 1000,
            bottom: "5%",
            minWidth: "30%",
            backgroundColor: "#f06292",
          }}
          className="justify-content-center "
          href="https://mitienda.moda/digital"
        >
          VER CATÁLOGO DIGITAL !{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-book"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
        </Button>{" "}
      </Col>

      <div>
        <Nav
          className="justify-content-center "
          style={{
            position: "fixed",
            zIndex: 1000,
            bottom: 0,
            minWidth: "100%",
            boxShadow: "0px 4px 30px rgba(0,0,0,.5)",
            backgroundColor: "#fff",
          }}
        >
          <Nav.Item>
            <Nav.Link href="/First">
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ height: "25px" }}
                  src="https://i.pinimg.com/originals/42/97/83/429783b5e349774bee8bcd4f8f11e14e.png"
                />
              </div>

              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#f06292",
                  caretColor: "#f06292",
                  fontSize: "20px",
                }}
              >
                Categorias
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://mitienda.moda/catalogo/591">
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ height: "25px" }}
                  src="https://img2.freepng.es/20180622/fjj/kisspng-purchase-order-computer-icons-purchasing-sales-ord-price-list-5b2d7084d231d9.277663481529704580861.jpg"
                />
              </div>

              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#f06292",
                  caretColor: "#f06292",
                  fontSize: "20px",
                }}
              >
                Catálogo
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://mitienda.moda/carrito">
              <div style={{ textAlign: "center" }}>
                <img
                  style={{ height: "25px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAgVBMVEX////sNZTrJ4/sMZPuTJ7rH4396vPrK5H1pcv84e7rJY/rHIzzjr772ur60OTwaq3vXKf1nsf2qs73t9b+9/v+9fr4vdnzibv60+b+7/f85PD3tdT5yN/ygrjzkcDtPJjwZKrxdLHuU6Hyfrb0mMT5xN3xcbDtRJv2qc71nMfwZ6qWgeQAAAANr0lEQVR4nO1dC3eiPBAVIgSDICii4APFV/X//8AvCUoChtZumdDyec+eXZuymJvHZDKZmQwGb7zxxhtvvPHGG2+88cYbb3SH0x6T4WHld10PWIxdbBgIE4tki5XXdW2gMHONBxhXPNyuvKjrSrWPITIqoFwJyrer0bzrmrUJmxgKcK7BeDbqS7+qaZZj2Ai2cR+4JriRpuC6c/78CN5/wZNzJXjZdT1/iAS9wJN2atJ1RX8Ie+iaGH3F01x0Xc8fY+kcLpb1FdceCCI6dn1nfyGfcLXirqvYGpJ1eM6xZSIFV7TrunbtIjmFN9avda4k7bpm7SM9hTvOVRJC164rBYR0fd0Zgijquj6ASARNa911ZQCxKbUHfO66LoDwxH7U/eua0GfIy2FLpl3XBRDTcquGhl3XBRCJ2JG6vTUVDeStGv77+nsz1lbP9PcG9FJ/f0ZolkIo6LougEjE0mmNuq4MIIJy6TSPXdcFELFYOrOu6wKISFjFrFPXlQHEQiydk67rAghPLJ1/3pL5GcSBEnG6rgsgTmV3okvXdQFEJBkR/vo5w2c4CCF06LougFgKIUT6rL9LQmjVdV0AIenvedd1AYQtRq3bZ/19IoTQtuu6AEIsnb22vw+kpbPPRoTx/0N/HwkjAumz/i6MCHgzGqV2Mp/PI4auK9YuVsIwjS3LIhizI/wsyy7DPNidz4fFYrw9ho7jTFdxfPJ9L7XtJCnaouvKv45IMthWgBhwAdMk9A8hFoPr0tbgzVG0xWS/P2w2i/H4eOVtcfKXnufxgfGLGuLwigtRE6SmYI1RNgVtCwreGkZ2ocNiNzkfDovxMdyGtClmp/WaNsYoTSj0NMWyqTtbAxIDwzSf2oI3Bsoul2FwO7NhsT1er1O7dZ6XL92kdECaI6wl3HHbNJ1mf80OYbW9A/7ELbVLuG376U9+IoTA0PqB5AlcCP0L8KZlmlEmvZ1wmCaTBUwq9IfmYFsaEQwUz1azaRhex5vDZLfbcV8MnFHOj1WAgfDpXAhGdEfrNFs/RZf0d6u+WNPlhjBhEM3tdES1G99fr0/xDDG/xu3mcDjvAop8mBmYuC4ja4rGoKOCD4uiBb/XFgB+dkGz/X2IDEvhhLFTF9MXmSFrjaVPG2M6da7H8eJwZG/Ogjyns4PclQKmMrJvRawpzIciJbUDgBFuJuzvdf+ZSyMfSyHxJ0hp2V5gg8zun6MoSew0ZUPjhuiQWDm8LRaLw/58nggxoXr9DzEXrejWatnQm000sbJYpikhNA3zo1o0KxdxF8AHdtNof/8mTXXxJzRrk+RYSkMXIH5EcuIj1ddrpin8laxvVP9lNNrfNdOcPOoBc0gnOfFV/Wc00yx9JmHc8Bv9Z/TSFAoZkI+d0N/Niv1dL03hMgnkhd/kxKeXptDHoI7oBMuK/0yglaZfNjaUE/61XLEq9ne9vSl8sqA87FJhRCCSwUkvTdHWYGcAav2d7VAUahcQTUkb+2btX0Ys9HfJiY/1pmL8ANEs5T2cC08kCSFRVb2DNoDVDh6VeYyYfVn4SW8qdlzf36FU40OEdtC6iaSE5MRHPPsOthOeJXYS2TISNmVXiV1DQnU1Ej8X0042j8/FB0yVHbnYFzoKYIyeCMIxiFnYvrj4NTHBiFTATUQmqeM7xaaJa8WmsElBRgFNf49hGtLFt5IvwSzAPhYnPCa3YD0Xy2DF6OViVC+WRhOk/46ULyFzOELEDApT/nm1ckowlvupU8N0SOs9eS6+MNGpeBoZKOfFH0WBmDWgHr6S/v5YOpmkbVAPFOsMbSdV8ZhKWoWjilOXtMLhA4Gm2MjK5nxMDuB1k4SV/15qB7BRBpIT360ogaR5rasHwLaDErZkRCiGais0qaqq8q560oLKwQSoHXDcRBBOMZza6k3VCnGs0Uy0eRDGdf/31npT8RKqBVVojoSJBDrGQMjaYv/eCk0qUlUv2dRoCm8P8ACguv7eCs0VaexNWdJKtgPoEGGvNmqbaap22w1HRYymeixXBPBHSZO07zBTg/CfISwS8JPeVBQ39GZ9EopiIh8VSSMJ3E1yWu3OhoO/vJmmehuq2nKwuSkHVZYnC0YG7/oljhiJx89rsWIE0Y5Q7bbPWDmWz+repDQrK4cu7YBjUsnkYagPVFknKxb8sVrdmbxGU9gO9s8Pt42R0J/zQtYoLMNntTVkiJQ6+mu9mQhLsY4kBeIQ0JpxA6Zitu3UJiJGUzHEGc2P5+IaTY3aAYMjHwIykapYqwM1TbYRUzTKazQ1agcMkhOfG1E+KukeqLehDVrduVHSYknSSgcoWgIQJSE05jNlHVOcHH/G/o2X4TrmI4t+9p1T7F/X63i2dNZeeKFPH1fxyFkt+aMz35s6zkfGBsbUmXqx7zu+Hy7Xob8ujArBKb7jJLYNqhZsH0uxHeOEscU9fYnF7W+WZVqFwY/9wJyd2O/4p8JERNiD1uNhImxBhD9p8Sfpn6K4av+7r2RagiiS1j3TvgddwcFh1ZJpunVY9+LSZ4sQXnx3ZqMfUcZLXMx9nmkxxhbClouIi7FLEPN24+bb6jsLmprSh0hOfAYzDaejGlI6rcyPdDS3PfoD/XUU0b9SZnU3ncROvTQazPmT0SCKuJEkHthRtBxF9nIeLe2Bt1x69Gm8scuX6k8wFsjDtukMRaXTqheUho3YorLOiFARaBOJXC+J5o/3m3SHpVKOqhsXEUxaNfcBImqXZkNvjis0Pb3aAccGt01ToRg7pnwwLmkH2tKLSUtnCzRDUznBrxVztDio0hgALQXhtGPZU0imqp1W2A6IvuTdUhDOz2mybahi01GlWQar6Uz9JwXRt3O48KXVXRyg7P692t/GTRyQK5JgAbhYlNNEh+2gxEnpP/NAA839t10sBM1S6GlNcCgF4SgWgwaah2/RZOeb4SCap17sXMURMlHswOEwFqaZZx3zp4M2SlNvzSx56MLDewt/C93aAUMqCaGn/d/3aG7vNFNvuZ6O9/sgK+NQjOdNn+bkRZ8E4XxGs7a2z9PlmhvR8sxyRZD6J4AIzfgET4eAEhpongs9IErSZTzdbs55hk3S2G0N0Jy7SArCeRpHCppze7Rki8Jld2E3kVjE/KrbGqA7u2FzEE7psxelS/+0WpwnwdAou+1nNhbtVwd4DZGAkb1ktrrhjXKziunWYmSjqz0HTC55IkSpH0/D8T4fZtjisxYmipXoTwEjOfGZxL1PNzCzH8JUXrkd5IhLoKOuEafG7YMk22221xX4MbUKZ4ggembRZMsMpXYJJpvjdOaPNKXsaIDXWnfeuVHlB+fnw+a48r3Rr0lQJMIp/5UbO1JwCUbD82JLuaXJr+EmMP6HzmSpRdh0s3CW5fvN1Zme0t+UUecZh5dZFqKEraDGZbjbXKezNZ1uv5mbwPkLn/A7N5YH5xKcF+Hq1LUo+Rfs1CwRn26MHFsBnOl6ZP89biWiYWUtQcXqRogRLEJndfqD3aZCklVYWjdntVr34ZrHCtKqSuf2M7f0srpR7GneyDWRWSKV+1MPMKuIWPTnr+lUY1o5kUdGPy/5uVZY4qyTnRE4FlWWlz9/ga4SVTXW7OnFN5OK9OnALKMFQWV72Xriwl+CW5VlT3ODjysjtqcK3sCvyFhXcR7ZCwxlDc/tp4JXzaSD+ns/yk66MBf39gKGueTO2lMFj0Eas7iHl1k/4IhMPT1dSTgkj7lfaBdvDSIoQ0O0XXeQaHZdFUh04uapH8KxtNc3WctKUI+7cy5dGBL0WAhJyh7OZr1dVGJZdSd4qAnBU0kegg6mrHKggLoDySC1zRjaO+ZlYFAN5QbhHfNPsCDXtHnWcdxmCdiQv7TDmyQqAHbCTLPfMW6hQzTmE/c3dCi8wS3+BTc0EQ3RuHPpEhgMiwo39LhHw9Tha+pIYghtx+PF+FW8/mSB7ULmifbHsCgP4Y2n81zWETDsluwo09QZGJYY1YHU/qVlEvZVrcvUF86Yl0krrMKZxIXrz23hL88zW/CvNXdg31X7Zr7ntA5+NEhWQ27RBIvwKaKarTyeD6L1mVMGVfEEeGZ3hB9RNAsCOWV4ZJb1MAnHRX4SLWYLnjteCr098J9hDhp4iEsRP853Izxa1NJyFTo7+ePXZ6zyy9m+R3Cq4i5bAPMu5zHU3iQLWCAjC998ZFEFBU+06SaDwYfLHIITHo/4HDbVDphZmJkQRxZGiMURsdRPSIclnEUpsNC+iMfmsVyCbCQB7YlYvBKbHzwChHUrz5sBnyzxTjN45Lhisoe3MMxAYpozk+LFETmmvcj4Ql2bIYPHnLCTBb67tkItvckjqlmiu6I3NRgUebimS4fNzMXIZNNkATs3WZS8jU2E2Y2ivqUr6xNrYR6Mv77lm/mdN5DLMDtO5azsQ35mujrjree+d36MIt3VygcU0DgasRlChMq8suCatIYidfMjq0a051oQVCImftBoPRI58AhKLesJRViolpN4ZC/Dwiz0nAqgJRTpwshl6iXerNj+aQvDDYodCnHdImUepK9X6N53KO59N0S07TijYTXCzwW8laTmoGyQHeB31SFb9jDUlWV3OK7YxCNXVza2AvHFYkEoCBF3D616jW6uyUxPyHTz9u9O/QLr8TAzLjtHh6vXKAwyI8u33bgI6oy8jP5ImOcbb7zxxhtvvPHGG2+0hf8AIq7qh5m0AmgAAAAASUVORK5CYII="
                />
              </div>

              <span
                style={{
                  fontFamily: "Montserrat",
                  color: "#f06292",
                  caretColor: "#f06292",
                  fontSize: "20px",
                }}
              >
                Carrito
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}
