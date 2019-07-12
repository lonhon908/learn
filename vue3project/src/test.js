    var yuanList = [{
        "mapProvince": "湖南省",
        "mapCity": "衡阳市",
        "mapDistrict": "南岳区",
        "shopName": "牛肉拉面"
      },
      {
        "mapProvince": "湖南省",
        "mapCity": "衡阳市",
        "mapDistrict": "岳阳区",
        "shopName": "酸菜拉面"
      },
      {
        "mapProvince": "湖南省",
        "mapCity": "衡阳市",
        "mapDistrict": "南岳区",
        "shopName": "肉丝拉面"
      },
      {
        "mapProvince": "湖南省",
        "mapCity": "株洲市",
        "mapDistrict": "天元区",
        "shopName": "豚骨拉面"
      },
      {
        "mapProvince": "上海市",
        "mapCity": "上海市",
        "mapDistrict": "浦东新区",
        "shopName": "肉丝拉面"
      },
      {
        "mapProvince": "上海市",
        "mapCity": "上海市",
        "mapDistrict": "浦东新区",
        "shopName": "羊肉烩面"
      },
      {
        "mapProvince": "上海市",
        "mapCity": "上海市",
        "mapDistrict": "浦东南边",
        "shopName": "牛杂面"
      }
    ]

    var yuanList1 = [{
      name: "湖南省",
      child: [{
        name: "衡阳市",
        child: [{
            name: "南岳区",
            child: [{
                name: "牛肉拉面",
              },
              {
                name: "肉丝拉面",
              }
            ]
          },
          {
            name: "岳阳区",
            child: [{
              name: "酸菜拉面",
            }]
          }
        ]
      }, {
        name: "株洲市",
        child: [{
          name: "天元区",
          child: [{
            name: "豚骨拉面",
          }]
        }]
      }]
    }, {
      name: "上海市",
      child: [{
        name: "上海市",
        child: [{
            name: "浦东新区",
            child: [{
                name: "肉丝拉面",
              },
              {
                name: "羊肉烩面",
              }
            ]
          },
          {
            name: "浦东南边",
            child: [{
              name: "牛杂面",
            }]
          }
        ]
      }]
    }]
    console.log(yuanList, yuanList1);


    // var obj = {};

    // yuanList.forEach(item => {
    //   if (obj[item.mapProvince]) {
    //     let data = obj[item.mapProvince].child.find(data => data.name === item.mapCity);
    //     if (data) {

    //     } else {
    //       obj[item.mapProvince].child.push({
    //         name: item.mapCity,
    //         child: [{
    //           name: item.mapDistrict,
    //           child: [{
    //             name: item.shopName
    //           }]
    //         }]
    //       })
    //     }
    //   } else {
    //     obj[item.mapProvince] = {
    //       child: [{
    //         name: item.mapCity,
    //         child: [{
    //           name: item.mapDistrict,
    //           child: [{
    //             name: item.shopName
    //           }]
    //         }]
    //       }]
    //     }
    //   }
    // })


    var obj = {

    }

    yuanList.forEach(item => {
      if (!obj[item.mapProvince]) {
        obj[item.mapProvince] = [{
          name: item.mapCity,
          child: [{
            name: item.mapDistrict,
            child: [{
              name: item.shopName
            }]
          }]
        }]
      } else {
        let city = obj[item.mapProvince].find(a => a.name === item.mapCity);
        if (!city) { // 比较市
          obj[item.mapProvince].push({
            name: item.mapCity,
            child: [{
              name: item.mapDistrict,
              child: [{
                name: item.shopName
              }]
            }]
          })
        } else {
          let town = city.child.find(b => b.name === item.mapDistrict);
          if (!town) {
            city.child.push({
              name: item.mapDistrict,
              child: [{
                name: item.shopName
              }]
            })
          } else {
            town.child.push({
              name: item.shopName
            })
          }
        }
      }
    })
    console.log(obj)

    var list = [];

    Object.keys(obj).forEach(item => {
      list.push({
        name: item,
        child: obj[item]
      })
    })
    console.log(JSON.stringify(list))


    var bb = [{
      "name": "湖南省",
      "child": [{
        "name": "衡阳市",
        "child": [{
          "name": "南岳区",
          "child": [{
            "name": "牛肉拉面"
          }, {
            "name": "肉丝拉面"
          }]
        }, {
          "name": "岳阳区",
          "child": [{
            "name": "酸菜拉面"
          }]
        }]
      }, {
        "name": "株洲市",
        "child": [{
          "name": "天元区",
          "child": [{
            "name": "豚骨拉面"
          }]
        }]
      }]
    }, {
      "name": "上海市",
      "child": [{
        "name": "上海市",
        "child": [{
          "name": "浦东新区",
          "child": [{
            "name": "肉丝拉面"
          }, {
            "name": "羊肉烩面"
          }]
        }, {
          "name": "浦东南边",
          "child": [{
            "name": "牛杂面"
          }]
        }]
      }]
    }]