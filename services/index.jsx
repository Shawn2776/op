import request, { gql } from "graphql-request";

export const getEquipmentList = async () => {
  const query = gql`
    query EquipmentList {
      equipmentLists {
        equipmentName
        hourlyPublicRate
        hourlyStudentRate
        dailyPublicRate
        dailyStudentRate
        id
        image {
          fileName
        }
      }
    }
  `;

  const result = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm3qaqfge01ul07up6vaqv6y7/master",
    query
  );

  return result;
};