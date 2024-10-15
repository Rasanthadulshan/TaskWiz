import { Link } from "react-router-dom";
import "../Styles/getpremium.css";

export default function Getpremium() {
  return (
    <div className="getpremium-container">
      <div class="getpremium-content">
        <div className="getpremium-button">
          <Link to="/dashboard">Back</Link>
        </div>
        <div class="getpremium-header">
          <h2>Improve your</h2>
          <h1>Project Management Skills</h1>
          <p>
            Manage your projects effortlessly with our innovative platform
            designed to streamline every aspect of project management. From
            planning and scheduling to collaboration and execution, our tools
            help you stay organized, communicate effectively, and deliver
            results on time.
          </p>
        </div>
        <div className="getpremium-reviews-container">
          <div className="getpremium-reviews">
            <img
              src="data:image/jpeg;base64,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"
              alt="Steffany Nimons"
            />
            <blockquote>
              The intuitive interface and powerful features have made it easy
              for our team to stay organized, collaborate effectively, and hit
              our deadlines. We especially love the real-time collaboration
              tools, which have dramatically improved our communication and
              productivity.
              <br /> -Steffany Nimons-
            </blockquote>
          </div>
          <div className="getpremium-reviews">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EADoQAAEDAwMBBAgEBAcBAAAAAAEAAgMEBRESITFBBiJRYRMUMnGBkaHBIzNS0RVCseEHNENTYnLxJP/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgQFAwb/xAAnEQACAQMEAQMFAQAAAAAAAAAAAQIDBBESITFBIgUyYRMjQlFxM//aAAwDAQACEQMRAD8Au8JCE5hIQrJQGiEmE4QkwnkAcLsIsJMIyAOF2EuFBu90p7VTiSfLnvOmKJgy6R3gP3Sbwsgk3wSnYaNTiA0cknGFTVPamyUspjkrmOeNi2PvY+SrKuiunaNuJ5fV6bP+Xid0/wCR6n6KZbOx0FJGdVO13gSBuqs7uKeEX6djOSzIdi7XWR8mg1ejpl7HNHzwrqlqIKqIS000csZ/mjcHD6Kvf2Rppqc6oNGt3JaCf7JuHsI+hjMlvq56SpBJa+M90/8AZvBUVdrsk/T3+LLpcqegu00dd/CrzCIK0exI38uf/r4HyV1hWoyUllFCcJQeJCYRALgN0oCkREARALkQCAEwlwiARYSGAQkwjQ4TECQhIRlJhAA4QkYRpCgBmoljghfNM4MjY0uc4ngBYigmlvVzkr5WkahiBjuWR9PieT/ZWX+IM722uGlZsKmYNfjq0b4+gUSygxzsI5Awqd1Ua8UaNjSTetmos8XoY9JG6vqYZ26FVtKGyOBCuaWPGFm4ybD2RYxBpjA0jZLLECM4QxOxt1Ugea7Yyjg3hmT7V2f16i1xjFRTu9JE4c7dFW2Sv/iNGHuH48Z0Sj/l4rZVbQdQxnK8/oAaPtZWU7RiKpi9KB4OacHHzXe1niWkqXtLVDWX2EoCVKFomQJhEAuwiASGdhKuRAIAEhCUS4oENkJMI0JTATCREkQBi+37tM9oaTs6Z4+ih0U8zZS2lgM0wGwOzR71Y/4gxwywUPfHp4qhrwzfJadj9lBbT13q5NH3XO/mG+FQuMazXss/TJbb7e6Fw9atzHxjrG4ZPwWusd/jrWABrmu/Q7lYmHs9Wzyh0tZIWae9GWHJPken1V92NtctPcPR1E3pSwZzjz2yq0sdF2OezR3K/C16swPkeMd1gyT7k3R9qa2qdtaph72pztTbKuqiMlulMUnUgZWYttou8VY4i46YjxHKwl2d+ux32+SUZdMco5wzdMrI6nOkPY9vtMeMELFVszXduImsx+VI0+/DT9lraGCqZBmrLS/GNQ6rKU1uqJ+1tbVCAuihe5od72t/uulF/cTONys0mi6SgLgEoC1TBFASrkQSA4BKuCVAAFIiKRMGAQkKIpEhApEq4pgYftgc3Yk7NDImjz7xK0PZsNdTgu3wqLt3QfjR1zXvBEZAA4y3dS7XXMo6KWd5Po2NycLMrryZvWkloRpbjVQ0lOXux5NHKj9kpozUyyzODZHO6+HRY+5XOW4RnEbtTsFoz7KcsEN1FVJIS1peOrhknp1XDTgt609kequqAxjpWESMGTsV1DVU9Y3Mbh91mbHQS0bS6aFzjLu5okJYD44yotbX/wAJqzVQMc2In8VhH1COCLSexu6hga3bHCoYoGVTa+me1w9O86HNPUNapUNeKmkErXZY5uQR4Ji2aRbGVrwC90j3t3xycfYIxqexBPRuyKQWuweQlCEkkknqcogtiPGDz02nJtC4RIQiTIirlyVAAIUSRAhChRFCmAhSJSkQBHrqSKtppKedoLHgjccZHKyPZ17HsloawDB7jgejh/4tssPf4XWy/iVu0FU3Vxw8bH9/mqt1DMcl6xq6Z6WR7jQVlPcIhDOPVA/vsGzgPetXaKK0kapqipDwG7P1DBzuNvgqqFhuEDZIgHyN7rx4gKRE6tp9A9TqHAn/AEzkKjn9m1FRxyayehoJRIKOpqA/S4NLXuOk4GOdlUU9lr329zLzWipkJOkNbgAdMnqri1+sSRgyRvaM7B/RSa9zIYiXO3Sk8oWcdlNPKyhtXq8A/LYGN9/RHTR+gpo4MnSwAAZ2VZTudXXKQ/6MJDsYx3jwPv8ABWwV21prTlmTfVXq0oUIkjUqtmeKEWEIRZQAQSpAlQA0Ui7qu4TEIUJSkpCgDki4lAXIAJZntlG2d1PG79DiPI5WjdI1rS5zg0Dkk4AWUvdXFWXEOp5WyRxxhocw5BOTnf5KvcPFMtWcW6pm6O4Vlsma0Oc0ZPG+fgtvbe07XU41DvdXc7rLvp2v1B7ctPQ7p2C3ZAbHrb5NcdlQbTNdKS4NrH2uhEPpOGb7Yzwqo3qqvNQ6OiOsPOnWRtGPeoVJ2bhkkaZy+XB3ZqOFsbRbo6ZoDGBrcYwOig2uiai+xunt7LdbY4mkucX5c88uJ6lcrSujJpjgezuqoLQtH4GRfJ/VyE1GgaiVophBcuBXJAGEqEIkDGUJSnhJ/VMiIhJUSuulJRNJklDn/wC2zdyzV07RVdQ0tpW+rN8QcuPx6KtVuqdPllmlaVKvCNTWVMNJCZqmRsUY5c44Cy107bUsA00ML6h54c7uN/dZ+pEs5Ek8kkj/ABe4k/VVph1VQGOOiqO/cn47F6Hp0YryeQrr2gud5ifHUzBkW/4MQ0tO+2fFaG2wtFLHoGG6RjZZY05bJIzHmFpOzlW30fqk5w4ewT4eC5yqauWWYUlDZIt4oDtsp1JCA8HCkUUbXd3bKnMpwDxhQZ2RPoog5uSB71aQNwdgoFI3GArNuGgYSSE2OPa17S1w5G4xthZGScUdXNTNy6KN5DcncDw+HC01xuEdtoXzye1xG08ud0WEic6SV8jyS55yT4rhXrypNOD3JQoRrJqa2NDDNHM0Ojdny4KcyqEZYQWkgjgqZDci3DagZH6gFdtvVIz2qbMzrn0ucN6e6LMIk3FKyUamOBTgOy1E1JZTMtxcXhoUIghCVMRFqaiKmgfNO/RG0ZJKydwvtRWlzKfVDBwMbOd7yoV0uz71VGKMllLGe4w8k+JQRs07dAse8vG/GD2NuyslHymtxjVipbE/l4JB80bosnHRM1o03Kgx1lIPu0lWhjGolZU3jD/ZqxXKIEsY48lAo4fSV82R7LR9VaVWwLvkmLLHqbUSnlx/onGWINilFOSGJqMSPONnDgpuOnJfjdkjdxhWjNnOBwnDBHKCHfAjlNVWtmDgmOWi4Pp52CoOGk4Lui3LGNnhEkLg5pHIKwJjcz2x6VvUjlFFJ6M5p55YT1DCQu0bhrncg6R6LTNdqAwirrpR0EeqaVpf/LGw5JP2XnklTVOGmS4TOZ4ZRRY/kaTnq9OVy0tiKoZe5ZXS4zXKpEko0sAwxnRoQxbBR2tPJIO/ipMJyCAOFnzk5PLLcUkth4kYKB2McZRD2iNkkgw39lHAwIy5jtTHFp8QVOp7jMzAlAePqoEb8g5PuRF+JmN/Vsu9G4q0nmDOFa3p1ViaNBTzxztzG7OOR1CeVDE90MgfGdx06FXkMrZoxIzg/RegsbxXEcPlHnr2zdvLK4Z5PQZDKmdpw+EAjz8lbU00c7dj3gMlVVo/EFbB1fHkY+KOnlcaRtXEMyQd2Vo5LfFZFSOps3IPCHqgZv1JF+kOf9MfdXMo0j3qpp9NVfIqhnserH4EuH7K2qcbDlVqv4r4O9Pt/JAuJ0xH6I7LFi35I53Td02p3YHRTqBum3N82ob+2Ne8YY0aznZSI2Dfy2TMbT6Q4wpUQ7wOeigySG9wUYALQS0HpuhmyH7BOMb3MYKQAhoBHcA9yXOASAUDjg7AjHOETNxyTkpDHx+WAT0R0ZyCo7i4MI3x5p6jxox1S6AfziXZOyjUwjyTDs6mkjbCkscCzHCTGVxcWtxpPOybZPqromjkbqc+HVC/HQqkhJFzjzvgqUVkjJ4L+J2WgHwUmGaSEHQeecqDTk6g0e9Ss5JA6JQnKnLMWE4xnHEkefW4mO5QlmxccFSLf+FeqynZ+W/OQuXLSl3/AApxF7K7S1Q/23ljfIK5qNpshcuVa4/1Z3o+wi3U/wDzfRWUXdpWAcYwkXLlL2ImvcxmMYkdhSCO+AkXJMaG6nZ6cYcNB2+S5ch8DGpGg5KdYMNSLkdAuTpT3U5TbAYXLkuhkgbp6PfK5cogOxbteDws7xcYSPH7rlylT7IzLeE6fSOGMhTKMaoWk8kLlygyR//Z" />
            <blockquote>
              The customer support is responsive and always ready to help, which
              has made our transition smooth. Truly a remarkable tool for any
              project manager!
              <br />- David Rachel -
            </blockquote>
          </div>
        </div>
      </div>
      <div className="getpremium-payment">
        <h2>Make Your Payment</h2>

        <form action="">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label for="card-number">Card Number</label>
          <input
            type="number"
            id="card-number"
            name="card-number"
            placeholder="Enter card number"
            required
          />

          <label for="expiry-date">Expiry Date</label>
          <input
            type="text"
            id="expiry-date"
            name="expiry-date"
            placeholder="MM/YY"
            required
          />

          <label for="cvv">CVV</label>
          <input
            type="number"
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            required
          />

          <label for="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            required
          />

          <input type="submit" value="Pay Now" />
        </form>
      </div>
    </div>
  );
}
